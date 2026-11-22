import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1TextToDialogueRoute,
  postV1TextToDialogueStreamRoute,
  postV1TextToDialogueStreamWithTimestampsRoute,
  postV1TextToDialogueWithTimestampsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const textToDialogueHandler = app
  .openapi(postV1TextToDialogueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TextToDialogueStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TextToDialogueStreamWithTimestampsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TextToDialogueWithTimestampsRoute, (c) => {
    throw new Error('Not implemented')
  })
