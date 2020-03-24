'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//Route.on('/').render('welcome')

Route.group(()=>{
    Route.post('login','UserController.login')
    Route.post('registro','UserController.registro')
    Route.get('mostrar/:id','UserController.mostrar')
    Route.get('usuarios','UserController.index')
    Route.get('productos','UserController.indexp')
    Route.post('producto','UserController.insertProducto')
    Route.delete('producto/:id','UserController.deleteProducto')

    Route.get('ventas','UserController.indexv')
    Route.post('venta','UserController.insertVenta')

    Route.get('proveedores','UserController.indexsup')
    Route.post('proveedor','UserController.insertProveedor')
    Route.delete('proveedor/:id','UserController.deleteProveedor')

    Route.get('clientes','UserController.indexc')
    Route.post('cliente','UserController.insertCliente')
    Route.delete('cliente/:id','UserController.deleteCliente')
    



    Route.get('departamentos','UserController.indexd')
    Route.post('departamento','UserController.insertDepartamento')
    Route.delete('departamento/:id','UserController.deleteDepartamentos')

    Route.get('paqueterias','UserController.indexpaq')
    Route.post('paqueteria','UserController.insertPaqueteria')
    Route.delete('paqueteria/:id','UserController.deletePaqueteria')

    Route.get('detalle_ventas','UserController.indexdv')
    Route.post('detalle_venta','UserController.insertDetalle_Venta')
    Route.delete('detalle_venta/:id','UserController.deleteVentas')


    Route.get('consulta','UserController.consulta')

}).prefix('usuarios')
