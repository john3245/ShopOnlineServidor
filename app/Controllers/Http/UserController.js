'use strict'
const User=use('App/Models/User');
const Producto=use('App/Models/Producto')
const Venta=use('App/Models/Venta')
const Proveedore=use('App/Models/Proveedore')
const Cliente=use('App/Models/Cliente')
const Departamento=use('App/Models/Departamento')
const Paqueteria=use('App/Models/Paqueteria')
const DetalleVenta=use('App/Models/DetalleVenta')
const Database = use('Database')
class UserController {

async login({request,response,auth})
{

    const {email,password}=request.only(['email','password'])

    const token = await auth.attempt(email,password)

    return response.json(token)

}

async registro({request,response})
{
const {Nombre,Apellidos,email,password}=request.only(['Nombre','Apellidos','email','password'])

await User.create({
    Nombre,
    Apellidos,
    email,
    password
})
return response.send({message:'Se creo el usuario'})
}

async mostrar({params,response})

{

    const user=await User.find(params.id)
    const res ={
        Nombre :user.Nombre,
        Apellidos : user.Apellidos,
        Email : user.email
    }

    return response.json(res)
}

async index({response})
{
  let database=await User.all()
  return response.json(database)
}

async indexp({response})
{
  let database=await Producto.all()
  return response.json(database)
}

async insertProducto({request,response})
{
  //const producto=new Producto()
  const {nombre,precio_unitario,id_dep,id_prov,imagen}=request.only(['nombre','precio_unitario','id_dep','id_prov','imagen'])
  await Producto.create({
    nombre,
    precio_unitario,
    id_dep,
    id_prov,
    imagen
})

const mailjet = require ('node-mailjet')
  .connect('1c8ba170d896d7c25977483fc264c3ac', 'd6f1684cedbe1530aa97065c870ab979')
  const peticion = mailjet
  .post("send", {'version': 'v3.1'})
  .request({
  "Messages":[
    {
      "From": {
        "Email": "israelvillanueva16@gmail.com",
        "Name": "Ricardo Israel"
      },
      "To": [
        {
          "Email": "shoponline58@outlook.com",
          "Name": "shop online"
        }
      ],
      "Subject": "Producto",
      "TextPart": "Se ha registrado un producto nuevo",
      "HTMLPart": "<h3>ShopOnline.com</h3><br /><p>Nombre: " + nombre + "<br />Precio Unitario: " + precio_unitario + "<br />Imagen :" +
      imagen + "</p>",
      "CustomID": "AppGettingStartedTest"
    }
  ]
})
peticion
  .then((result) => {
    console.log(result.body)
  })
  .catch((err) => {
    console.log(err.statusCode)
  })



  return response.status(201).json({nombre,precio_unitario,id_dep, id_prov,imagen})
}

async indexv({response})
{
  let database=await Venta.all()
  return response.json(database)
}

async insertVenta({request,response})
{
  const {fecha}=request.only(['fecha'])
  await Venta.create({
    fecha
})


  return response.status(201).json({fecha})
}

async indexsup({response})
{
  let database=await Proveedore.all()
  return response.json(database)
}

async insertProveedor({request,response})
{
  const {nombre,direccion,telefono,email}=request.only(['nombre','direccion','telefono','email'])
  await Proveedore.create({
    nombre,direccion,telefono,email
})

const mailjet = require ('node-mailjet')
  .connect('1c8ba170d896d7c25977483fc264c3ac', 'd6f1684cedbe1530aa97065c870ab979')
  const peticion = mailjet
  .post("send", {'version': 'v3.1'})
  .request({
  "Messages":[
    {
      "From": {
        "Email": "israelvillanueva16@gmail.com",
        "Name": "Ricardo Israel"
      },
      "To": [
        {
          "Email": "shoponline58@outlook.com",
          "Name": "shop online"
        }
      ],
      "Subject": "Proveedor",
      "TextPart": "Se ha insertado un proveedor",
      "HTMLPart": "<h3>ShopOnline.com</h3><br /><p>Nombre: " + nombre + "<br /><p>Dirección: " + direccion + "<br /><p>Telefono: " + telefono +
      "<br /><p>Email: " + email + "</p>",
      "CustomID": "AppGettingStartedTest"
    }
  ]
})
peticion
  .then((result) => {
    console.log(result.body)
  })
  .catch((err) => {
    console.log(err.statusCode)
  })


  return response.status(201).json({nombre,direccion,telefono,email})
}

async indexc({response})
{
  let database=await Cliente.all()
  return response.json(database)
}

async insertCliente({request,response})
{
  const {nombre, apellidos,email}=request.only(['nombre','apellidos','email'])
  await Cliente.create({
    nombre, apellidos,email
})

const mailjet = require ('node-mailjet')
  .connect('1c8ba170d896d7c25977483fc264c3ac', 'd6f1684cedbe1530aa97065c870ab979')
  const peticion = mailjet
  .post("send", {'version': 'v3.1'})
  .request({
  "Messages":[
    {
      "From": {
        "Email": "israelvillanueva16@gmail.com",
        "Name": "Ricardo Israel"
      },
      "To": [
        {
          "Email": "shoponline58@outlook.com",
          "Name": "shop online"
        }
      ],
      "Subject": "Cliente",
      "TextPart": "Se ha registrado un cliente",
      "HTMLPart": "<h3>ShopOnline.com</h3><br /><p>Nombre: " + nombre + "<br />Apellidos: " + apellidos + "<br />Email: " + email + "</p>",
      "CustomID": "AppGettingStartedTest"
    }
  ]
})
peticion
  .then((result) => {
    console.log(result.body)
  })
  .catch((err) => {
    console.log(err.statusCode)
  })



  return response.status(201).json({nombre, apellidos,email})
}
////////////////delete
async deleteCliente({params, response})
    {
        const cli=await Cliente.find(params.id)
        if(!cli)
        {
            return response.status(404).json({data: "Datos no encontrados"})
        }
        await cli.delete()
        return response.status(204).json({data: 'Datos eliminados correctamente'})
    }

    async deleteDepartamentos({params, response})
    {
        const dep=await Departamento.find(params.id)
        if(!dep)
        {
            return response.status(404).json({data: "Datos no encontrados"})
        }
        await dep.delete()
        return response.status(204).json({data: 'Datos eliminados correctamente'})
    }

    async deleteProveedor({params, response})
    {
        const pro=await Proveedore.find(params.id)
        if(!pro)
        {
            return response.status(404).json({data: "Datos no encontrados"})
        }
        await pro.delete()
        return response.status(204).json({data: 'Datos eliminados correctamente'})
    }

    async deletePaqueteria({params, response})
    {
        const pa=await Paqueteria.find(params.id)
        if(!pa)
        {
            return response.status(404).json({data: "Datos no encontrados"})
        }
        await pa.delete()
        return response.status(204).json({data: 'Datos eliminados correctamente'})
    }

    async deleteVentas({params, response})
    {
        const ven=await DetalleVenta.find(params.id)
        if(!ven)
        {
            return response.status(404).json({data: "Datos no encontrados"})
        }
        await ven.delete()
        return response.status(204).json({data: 'Datos eliminados correctamente'})
    }


    async deleteProducto({params, response})
    {
        const prod=await Producto.find(params.id)
        if(!prod)
        {
            return response.status(404).json({data: "Datos no encontrados"})
        }
        await prod.delete()
        return response.status(204).json({data: 'Datos eliminados correctamente'})
    }




async indexd({response})
{
  let database=await Departamento.all()
  return response.json(database)
}

async insertDepartamento({request,response})
{
  const {nombre}=request.only(['nombre'])
  await Departamento.create({
    nombre
})

const mailjet = require ('node-mailjet')
  .connect('1c8ba170d896d7c25977483fc264c3ac', 'd6f1684cedbe1530aa97065c870ab979')
  const peticion = mailjet
  .post("send", {'version': 'v3.1'})
  .request({
  "Messages":[
    {
      "From": {
        "Email": "israelvillanueva16@gmail.com",
        "Name": "Ricardo Israel"
      },
      "To": [
        {
          "Email": "shoponline58@outlook.com",
          "Name": "shop online"
        }
      ],
      "Subject": "Departamento",
      "TextPart": "Se ha insertado un departamento",
      "HTMLPart": "<h3>ShopOnline.com</h3><br /><p>Nombre: " + nombre + "</p>",
      "CustomID": "AppGettingStartedTest"
    }
  ]
})
peticion
  .then((result) => {
    console.log(result.body)
  })
  .catch((err) => {
    console.log(err.statusCode)
  })


  return response.status(201).json({nombre})
}

async indexpaq({response})
{
  let database=await Paqueteria.all()
  return response.json(database)
}

async insertPaqueteria({request,response})
{
  const {nombre, email, telefono}=request.only(['nombre', 'email', 'telefono'])
  await Paqueteria.create({
    nombre, email, telefono
})

const mailjet = require ('node-mailjet')
  .connect('1c8ba170d896d7c25977483fc264c3ac', 'd6f1684cedbe1530aa97065c870ab979')
  const peticion = mailjet
  .post("send", {'version': 'v3.1'})
  .request({
  "Messages":[
    {
      "From": {
        "Email": "israelvillanueva16@gmail.com",
        "Name": "Ricardo Israel"
      },
      "To": [
        {
          "Email": "shoponline58@outlook.com",
          "Name": "shop online"
        }
      ],
      "Subject": "Paqueteria",
      "TextPart": "Se ha insertado una paqueteria",
      "HTMLPart": "<h3>ShopOnline.com</h3><br /><p>Nombre: " + nombre + "<br />Email: " + email + "<br />Telefono: "+telefono+ "</p>",
      "CustomID": "AppGettingStartedTest"
    }
  ]
})
peticion
  .then((result) => {
    console.log(result.body)
  })
  .catch((err) => {
    console.log(err.statusCode)
  })

  return response.status(201).json({nombre, email, telefono})
}

async indexdv({response})
{
  let database=await DetalleVenta.all()
  return response.json(database)
}

async insertDetalle_Venta({request,response})
{
  const {id_cli,id_pro,cantidad_pro,id_paq,fecha}=request.only(['id_cli', 'id_pro','cantidad_pro','id_paq','fecha'])
  await DetalleVenta.create({
    id_cli,id_pro,cantidad_pro,id_paq,fecha
})


  return response.status(201).json({id_cli,id_pro,cantidad_pro,id_paq})
}

async consulta({response})
{


        /* const usu =
        await Database
        .table('users')
        .innerJoin('datos_personales', function () {
          this
            .on('users.id', 'datos_personales.user_id')
            .orOn('users.id', 'datos_personales.user_id')
        })
        return response.status(200).json({usu});
*/
/*
const dato=
  await Database
  .table('detalle_ventas')
  .innerJoin('clientes', function () {
    this
      .on('clientes.id', 'detalle_ventas.id_cli')
      .orOn('clientes.id', 'detalle_ventas.id_cli')
  })

  return response.status(200).json({dato});*/
  let database=await DetalleVenta.query().select('detalle_ventas.id','clientes.nombre as cliente','productos.nombre as producto','detalle_ventas.cantidad_pro','paqueterias.nombre as paqueteria').table('detalle_ventas')
  .innerJoin('clientes','clientes.id','detalle_ventas.id_cli')
  .innerJoin('productos','productos.id','detalle_ventas.id_pro')
  .innerJoin('paqueterias','paqueterias.id','detalle_ventas.id_paq').fetch()
  return response.json(database)

}





}

module.exports = UserController
