import { OpenAPIHono } from '@hono/zod-openapi'
import { getOwlOntologyDlqueryQueryRoute, getOwlOntologySparqlQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const owlOntologyHandler = app
  .openapi(getOwlOntologyDlqueryQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOwlOntologySparqlQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
