import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGroupsGroupIdPhotoRoute,
  getGroupsGroupIdPhotosProfilePhotoIdRoute,
  getGroupsGroupIdPhotosProfilePhotoIdValueRoute,
  getGroupsGroupIdPhotosRoute,
  getGroupsGroupIdPhotoValueRoute,
  patchGroupsGroupIdPhotoRoute,
  putGroupsGroupIdPhotosProfilePhotoIdValueRoute,
  putGroupsGroupIdPhotoValueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsProfilePhotoHandler = app
  .openapi(getGroupsGroupIdPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdPhotoValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsGroupIdPhotoValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdPhotosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdPhotosProfilePhotoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdPhotosProfilePhotoIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsGroupIdPhotosProfilePhotoIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
