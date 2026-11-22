import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAttributeDeleteJsonRoute,
  getAttributeAttributesetListJsonRoute,
  getAttributeCountJsonRoute,
  getAttributeGroupListJsonRoute,
  getAttributeInfoJsonRoute,
  getAttributeListJsonRoute,
  getAttributeTypeListJsonRoute,
  postAttributeAddJsonRoute,
  postAttributeAssignGroupJsonRoute,
  postAttributeAssignSetJsonRoute,
  postAttributeUnassignGroupJsonRoute,
  postAttributeUnassignSetJsonRoute,
  postAttributeUpdateJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const attributeHandler = app
  .openapi(postAttributeAddJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAttributeAssignGroupJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAttributeAssignSetJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAttributeAttributesetListJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAttributeCountJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAttributeDeleteJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAttributeGroupListJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAttributeInfoJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAttributeListJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAttributeTypeListJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAttributeUnassignGroupJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAttributeUnassignSetJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAttributeUpdateJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
