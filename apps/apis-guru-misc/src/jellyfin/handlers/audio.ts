import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAudioItemIdStreamContainerRoute,
  getAudioItemIdStreamRoute,
  headAudioItemIdStreamContainerRoute,
  headAudioItemIdStreamRoute,
} from '../routes'

const app = new OpenAPIHono()

export const audioHandler = app
  .openapi(getAudioItemIdStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headAudioItemIdStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAudioItemIdStreamContainerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headAudioItemIdStreamContainerRoute, (c) => {
    throw new Error('Not implemented')
  })
