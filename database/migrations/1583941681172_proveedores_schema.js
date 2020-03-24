'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProveedoresSchema extends Schema {
  up () {
    this.create('proveedores', (table) => {
      table.increments('id')
      table.string('nombre', 80).notNullable()
      table.string('direccion', 80).notNullable()
      table.string('telefono', 80).notNullable().unique()
      table.string('email', 80).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('proveedores')
  }
}

module.exports = ProveedoresSchema
