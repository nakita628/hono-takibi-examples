import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAndroidenterpriseV1EnterprisesEnterpriseIdRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountRoute,
  getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutRoute,
  getAndroidenterpriseV1EnterprisesRoute,
  postAndroidenterpriseV1EnterprisesAcknowledgeNotificationSetRoute,
  postAndroidenterpriseV1EnterprisesCompleteSignupRoute,
  postAndroidenterpriseV1EnterprisesEnrollRoute,
  postAndroidenterpriseV1EnterprisesEnterpriseIdCreateEnrollmentTokenRoute,
  postAndroidenterpriseV1EnterprisesEnterpriseIdCreateWebTokenRoute,
  postAndroidenterpriseV1EnterprisesEnterpriseIdSendTestPushNotificationRoute,
  postAndroidenterpriseV1EnterprisesEnterpriseIdUnenrollRoute,
  postAndroidenterpriseV1EnterprisesPullNotificationSetRoute,
  postAndroidenterpriseV1EnterprisesSignupUrlRoute,
  putAndroidenterpriseV1EnterprisesEnterpriseIdAccountRoute,
  putAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutRoute,
} from '../routes'

const app = new OpenAPIHono()

export const enterprisesHandler = app
  .openapi(getAndroidenterpriseV1EnterprisesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidenterpriseV1EnterprisesAcknowledgeNotificationSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidenterpriseV1EnterprisesCompleteSignupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidenterpriseV1EnterprisesEnrollRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidenterpriseV1EnterprisesPullNotificationSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidenterpriseV1EnterprisesSignupUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAndroidenterpriseV1EnterprisesEnterpriseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAndroidenterpriseV1EnterprisesEnterpriseIdAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidenterpriseV1EnterprisesEnterpriseIdCreateEnrollmentTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidenterpriseV1EnterprisesEnterpriseIdCreateWebTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidenterpriseV1EnterprisesEnterpriseIdSendTestPushNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidenterpriseV1EnterprisesEnterpriseIdUnenrollRoute, (c) => {
    throw new Error('Not implemented')
  })
