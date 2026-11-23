import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSharingGroupBlueprintsDeleteSharingGroupBlueprintIdRoute,
  getSharingGroupBlueprintsIndexRoute,
  getSharingGroupBlueprintsViewOrgsSharingGroupBlueprintIdRoute,
  getSharingGroupBlueprintsViewSharingGroupBlueprintIdRoute,
  postSharingGroupBlueprintsAddRoute,
  postSharingGroupBlueprintsDetachSharingGroupBlueprintIdRoute,
  postSharingGroupBlueprintsEditSharingGroupBlueprintIdRoute,
  postSharingGroupBlueprintsExecuteSharingGroupBlueprintIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sharingGroupBlueprintsHandler = app
  .openapi(postSharingGroupBlueprintsAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSharingGroupBlueprintsDeleteSharingGroupBlueprintIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSharingGroupBlueprintsDetachSharingGroupBlueprintIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSharingGroupBlueprintsEditSharingGroupBlueprintIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSharingGroupBlueprintsExecuteSharingGroupBlueprintIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharingGroupBlueprintsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharingGroupBlueprintsViewSharingGroupBlueprintIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharingGroupBlueprintsViewOrgsSharingGroupBlueprintIdRoute, (c) => {
    throw new Error('Not implemented')
  })
