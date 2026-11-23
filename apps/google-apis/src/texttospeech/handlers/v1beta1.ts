import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1beta1NameOperationsRoute,
  getV1beta1NameRoute,
  getV1beta1VoicesRoute,
  postV1beta1ParentSynthesizeLongAudioRoute,
  postV1beta1TextSynthesizeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1beta1Handler = app
  .openapi(postV1beta1TextSynthesizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1VoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentSynthesizeLongAudioRoute, (c) => {
    throw new Error('Not implemented')
  })
