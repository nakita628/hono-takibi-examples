import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersCustomfieldsCustomFieldIdRoute,
  getProvidersEmployersCustomfieldsCustomFieldIdRoute,
  getProvidersEmployersEmployerIdCustomfieldsRoute,
  postProvidersEmployersEmployerIdCustomfieldsRoute,
  putProvidersEmployersCustomfieldsCustomFieldIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customFieldHandler = app
  .openapi(deleteProvidersEmployersCustomfieldsCustomFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersCustomfieldsCustomFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersCustomfieldsCustomFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdCustomfieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployerIdCustomfieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
