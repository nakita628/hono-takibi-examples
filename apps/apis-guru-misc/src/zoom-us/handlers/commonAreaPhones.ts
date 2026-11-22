import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePhoneCommonAreaPhonesCommonAreaPhoneIdRoute,
  getPhoneCommonAreaPhonesCommonAreaPhoneIdRoute,
  getPhoneCommonAreaPhonesRoute,
  patchPhoneCommonAreaPhonesCommonAreaPhoneIdRoute,
  postPhoneCommonAreaPhonesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const commonAreaPhonesHandler = app
  .openapi(getPhoneCommonAreaPhonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneCommonAreaPhonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneCommonAreaPhonesCommonAreaPhoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneCommonAreaPhonesCommonAreaPhoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPhoneCommonAreaPhonesCommonAreaPhoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
