'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DetalleVentasSchema extends Schema {
  up () {
    this.create('detalle_ventas', (table) => {
      table.increments('id')
      table.integer('id_cli').unsigned().notNullable().references('id').inTable('clientes')
      table.integer('id_pro').unsigned().notNullable().references('id').inTable('productos')
      table.integer('cantidad_pro').notNullable()
      table.integer('id_paq').unsigned().notNullable().references('id').inTable('paqueterias')
      table.date('fecha').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('detalle_ventas')
  }
}

module.exports = DetalleVentasSchema
