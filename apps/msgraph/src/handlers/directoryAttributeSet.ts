import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDirectoryAttributeSetsAttributeSetIdRoute,
  getDirectoryAttributeSetsAttributeSetIdRoute,
  getDirectoryAttributeSetsCountRoute,
  getDirectoryAttributeSetsRoute,
  patchDirectoryAttributeSetsAttributeSetIdRoute,
  postDirectoryAttributeSetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoryAttributeSetHandler = app
  .openapi(getDirectoryAttributeSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryAttributeSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryAttributeSetsAttributeSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDirectoryAttributeSetsAttributeSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDirectoryAttributeSetsAttributeSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryAttributeSetsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
