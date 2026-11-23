import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postDebuginfoV1alpha1DebuginfoServiceDeleteDebuginfoRoute,
  postDebuginfoV1alpha1DebuginfoServiceListDebuginfoRoute,
  postDebuginfoV1alpha1DebuginfoServiceShouldInitiateUploadRoute,
  postDebuginfoV1alpha1DebuginfoServiceUploadFinishedRoute,
} from '../routes'

export const postDebuginfoV1alpha1DebuginfoServiceDeleteDebuginfoRouteHandler: RouteHandler<
  typeof postDebuginfoV1alpha1DebuginfoServiceDeleteDebuginfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDebuginfoV1alpha1DebuginfoServiceListDebuginfoRouteHandler: RouteHandler<
  typeof postDebuginfoV1alpha1DebuginfoServiceListDebuginfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDebuginfoV1alpha1DebuginfoServiceShouldInitiateUploadRouteHandler: RouteHandler<
  typeof postDebuginfoV1alpha1DebuginfoServiceShouldInitiateUploadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDebuginfoV1alpha1DebuginfoServiceUploadFinishedRouteHandler: RouteHandler<
  typeof postDebuginfoV1alpha1DebuginfoServiceUploadFinishedRoute
> = async (c) => {
  throw new Error('Not implemented')
}
