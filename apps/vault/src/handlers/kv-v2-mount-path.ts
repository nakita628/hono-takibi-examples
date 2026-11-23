import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteKvV2MountPathDataPathRoute,
  deleteKvV2MountPathMetadataPathRoute,
  getKvV2MountPathConfigRoute,
  getKvV2MountPathDataPathRoute,
  getKvV2MountPathMetadataPathIndexRoute,
  getKvV2MountPathMetadataPathRoute,
  getKvV2MountPathSubkeysPathRoute,
  postKvV2MountPathConfigRoute,
  postKvV2MountPathDataPathRoute,
  postKvV2MountPathDeletePathRoute,
  postKvV2MountPathDestroyPathRoute,
  postKvV2MountPathMetadataPathRoute,
  postKvV2MountPathUndeletePathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const kvV2MountPathHandler = app
  .openapi(getKvV2MountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKvV2MountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKvV2MountPathDataPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKvV2MountPathDataPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKvV2MountPathDataPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKvV2MountPathDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKvV2MountPathDestroyPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKvV2MountPathMetadataPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKvV2MountPathMetadataPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKvV2MountPathMetadataPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKvV2MountPathMetadataPathIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKvV2MountPathSubkeysPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKvV2MountPathUndeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
