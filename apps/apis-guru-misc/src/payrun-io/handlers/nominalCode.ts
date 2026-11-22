import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmployerEmployerIdNominalCodeNominalCodeIdRoute,
  getEmployerEmployerIdNominalCodeNominalCodeIdRoute,
  getEmployerEmployerIdNominalCodesRoute,
  postEmployerEmployerIdNominalCodesRoute,
  putEmployerEmployerIdNominalCodeNominalCodeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const nominalCodeHandler = app
  .openapi(deleteEmployerEmployerIdNominalCodeNominalCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdNominalCodeNominalCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdNominalCodeNominalCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdNominalCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployerEmployerIdNominalCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
