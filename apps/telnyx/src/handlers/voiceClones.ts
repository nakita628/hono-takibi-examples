import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVoiceClonesIdRoute,
  getVoiceClonesIdSampleRoute,
  getVoiceClonesRoute,
  patchVoiceClonesIdRoute,
  postVoiceClonesFromUploadRoute,
  postVoiceClonesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const voiceClonesHandler = app
  .openapi(getVoiceClonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVoiceClonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVoiceClonesFromUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVoiceClonesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchVoiceClonesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVoiceClonesIdSampleRoute, (c) => {
    throw new Error('Not implemented')
  })
