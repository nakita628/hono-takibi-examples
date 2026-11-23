import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1alphaIdeasRoute,
  getV1alphaParentIdeasRoute,
  getV1alphaParentLocalesRoute,
  patchV1alphaNameRoute,
  postV1alphaParentIdeaActivitiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1alphaHandler = app
  .openapi(getV1alphaIdeasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1alphaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alphaParentIdeaActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alphaParentIdeasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alphaParentLocalesRoute, (c) => {
    throw new Error('Not implemented')
  })
