import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWikiRestApiContentIdDescendantRoute,
  getWikiRestApiContentIdDescendantTypeRoute,
  postWikiRestApiContentIdCopyRoute,
  postWikiRestApiContentIdPagehierarchyCopyRoute,
  putWikiRestApiContentPageIdMovePositionTargetIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const content__childrenAndDescendantsHandler = app
  .openapi(putWikiRestApiContentPageIdMovePositionTargetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiContentIdDescendantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiContentIdDescendantTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiContentIdPagehierarchyCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiContentIdCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
