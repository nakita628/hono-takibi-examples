import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1OrganizationsGetSemanticSearchEnablementRoute,
  postV1OrganizationsUpdateSemanticSearchEnablementRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationSemanticSearchHandler = app
  .openapi(postV1OrganizationsGetSemanticSearchEnablementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsUpdateSemanticSearchEnablementRoute, (c) => {
    throw new Error('Not implemented')
  })
