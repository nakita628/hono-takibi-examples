import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEnterprisesEnterpriseIdRoute,
  getEnterprisesEnterpriseIdRoute,
  getEnterprisesRoute,
  postEnterprisesEnterpriseIdBrandedCallingRoute,
  postEnterprisesRoute,
  putEnterprisesEnterpriseIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const enterprisesHandler = app
  .openapi(getEnterprisesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnterprisesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEnterprisesEnterpriseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterprisesEnterpriseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEnterprisesEnterpriseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnterprisesEnterpriseIdBrandedCallingRoute, (c) => {
    throw new Error('Not implemented')
  })
