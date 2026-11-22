import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersEmployerIdProformaRoute,
  postProvidersEmployersEmployerIdProformaInitializeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const proformaHandler = app
  .openapi(getProvidersEmployersEmployerIdProformaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployerIdProformaInitializeRoute, (c) => {
    throw new Error('Not implemented')
  })
