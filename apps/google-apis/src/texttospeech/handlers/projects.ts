import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1beta1NameOperationsRoute,
  getV1beta1NameRoute,
  postV1beta1ParentSynthesizeLongAudioRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentSynthesizeLongAudioRoute, (c) => {
    throw new Error('Not implemented')
  })
