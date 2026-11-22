import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1DeploymentMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const deploymentMetadataHandler = app.openapi(postV1DeploymentMetadataRoute, (c) => {
  throw new Error('Not implemented')
})
