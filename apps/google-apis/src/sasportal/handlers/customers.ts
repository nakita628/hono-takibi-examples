import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1alpha1CustomersRoute, postV1alpha1CustomersProvisionDeploymentRoute } from '../routes'

const app = new OpenAPIHono()

export const customersHandler = app
  .openapi(getV1alpha1CustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1CustomersProvisionDeploymentRoute, (c) => {
    throw new Error('Not implemented')
  })
