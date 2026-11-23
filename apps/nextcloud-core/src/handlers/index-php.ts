import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIndexPhpAvatarGuestGuestNameSizeDarkRoute,
  getIndexPhpAvatarGuestGuestNameSizeRoute,
  getIndexPhpAvatarUserIdSizeDarkRoute,
  getIndexPhpAvatarUserIdSizeRoute,
  getIndexPhpCoreMimeiconRoute,
  getIndexPhpCorePreviewPngRoute,
  getIndexPhpCorePreviewRoute,
  getIndexPhpCoreReferencesPreviewReferenceIdRoute,
  getIndexPhpCsrftokenRoute,
  getIndexPhpOcmProviderRoute,
  postIndexPhpCoreWipeCheckRoute,
  postIndexPhpCoreWipeSuccessRoute,
  postIndexPhpLoginConfirmRoute,
  postIndexPhpLoginV2PollRoute,
  postIndexPhpLoginV2Route,
} from '../routes'

const app = new OpenAPIHono()

export const indexPhpHandler = app
  .openapi(getIndexPhpAvatarUserIdSizeDarkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexPhpAvatarUserIdSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexPhpCsrftokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexPhpLoginV2PollRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexPhpLoginV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexPhpAvatarGuestGuestNameSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexPhpAvatarGuestGuestNameSizeDarkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexPhpLoginConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexPhpOcmProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexPhpCorePreviewPngRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexPhpCorePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexPhpCoreMimeiconRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexPhpCoreReferencesPreviewReferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexPhpCoreWipeCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexPhpCoreWipeSuccessRoute, (c) => {
    throw new Error('Not implemented')
  })
