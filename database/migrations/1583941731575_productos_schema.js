'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductosSchema extends Schema {
  up () {
    this.create('productos', (table) => {
      table.increments('id')

      table.string('nombre', 80).notNullable()
      table.float('precio_unitario').notNullable()
      table.integer('id_dep', 60).unsigned().notNullable().references('id').inTable('departamentos')
      table.integer('id_prov',60).unsigned().notNullable().references('id').inTable('proveedores')
      table.string('imagen', 1000).notNullable().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('productos')
  }
}

module.exports = ProductosSchema
