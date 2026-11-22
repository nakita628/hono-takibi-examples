import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeAudiobooksRoute,
  getAudiobooksIdChaptersRoute,
  getAudiobooksIdRoute,
  getAudiobooksRoute,
  getMeAudiobooksContainsRoute,
  getMeAudiobooksRoute,
  putMeAudiobooksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const audiobooksHandler = app
  .openapi(getAudiobooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAudiobooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAudiobooksIdChaptersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAudiobooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeAudiobooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeAudiobooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAudiobooksContainsRoute, (c) => {
    throw new Error('Not implemented')
  })
