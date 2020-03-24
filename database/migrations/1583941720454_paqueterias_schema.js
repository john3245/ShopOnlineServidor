'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PaqueteriasSchema extends Schema {
  up () {
    this.create('paqueterias', (table) => {
      table.increments('id')
      table.string('nombre', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('telefono', 80).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('paqueterias')
  }
}

module.exports = PaqueteriasSchema
