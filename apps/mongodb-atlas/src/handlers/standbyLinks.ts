import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAtlasV2GroupsGroupIdStandbyLinksStandbyLinkIdRoute,
  getApiAtlasV2GroupsGroupIdStandbyLinksRoute,
  getApiAtlasV2GroupsGroupIdStandbyLinksStandbyLinkIdFailoversFailoverIdRoute,
  getApiAtlasV2GroupsGroupIdStandbyLinksStandbyLinkIdFailoversRoute,
  getApiAtlasV2GroupsGroupIdStandbyLinksStandbyLinkIdInspectFailoverReadinessRoute,
  getApiAtlasV2GroupsGroupIdStandbyLinksStandbyLinkIdRoute,
  postApiAtlasV2GroupsGroupIdStandbyLinksRoute,
  postApiAtlasV2GroupsGroupIdStandbyLinksStandbyLinkIdFailoversRoute,
} from '../routes'

const app = new OpenAPIHono()

export const standbyLinksHandler = app
  .openapi(getApiAtlasV2GroupsGroupIdStandbyLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdStandbyLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdStandbyLinksStandbyLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdStandbyLinksStandbyLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdStandbyLinksStandbyLinkIdFailoversRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdStandbyLinksStandbyLinkIdFailoversRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdStandbyLinksStandbyLinkIdFailoversFailoverIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiAtlasV2GroupsGroupIdStandbyLinksStandbyLinkIdInspectFailoverReadinessRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
