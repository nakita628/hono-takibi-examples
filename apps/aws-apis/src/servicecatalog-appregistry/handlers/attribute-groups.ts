import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAttributeGroupsAttributeGroupRoute,
  getAttributeGroupsAttributeGroupRoute,
  getAttributeGroupsRoute,
  patchAttributeGroupsAttributeGroupRoute,
  postAttributeGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const attributeGroupsHandler = app
  .openapi(postAttributeGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAttributeGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAttributeGroupsAttributeGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAttributeGroupsAttributeGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAttributeGroupsAttributeGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
