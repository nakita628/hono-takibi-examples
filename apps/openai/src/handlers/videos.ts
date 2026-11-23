import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVideosVideoIdRoute,
  getVideosCharactersCharacterIdRoute,
  getVideosRoute,
  getVideosVideoIdContentRoute,
  getVideosVideoIdRoute,
  postVideosCharactersRoute,
  postVideosEditsRoute,
  postVideosExtensionsRoute,
  postVideosRoute,
  postVideosVideoIdRemixRoute,
} from '../routes'

const app = new OpenAPIHono()

export const videosHandler = app
  .openapi(postVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVideosCharactersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosCharactersCharacterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVideosEditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVideosExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVideosVideoIdRemixRoute, (c) => {
    throw new Error('Not implemented')
  })
