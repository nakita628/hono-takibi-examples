import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEndpointsIdKubernetesHelmReleaseRoute,
  deleteUsersIdHelmRepositoriesRepositoryIDRoute,
  getEndpointsIdKubernetesHelmReleaseHistoryRoute,
  getEndpointsIdKubernetesHelmReleaseRoute,
  getEndpointsIdKubernetesHelmRoute,
  getTemplatesHelmCommandRoute,
  getTemplatesHelmRoute,
  getUsersIdHelmRepositoriesRoute,
  postEndpointsIdKubernetesHelmReleaseRollbackRoute,
  postEndpointsIdKubernetesHelmRoute,
  postUsersIdHelmRepositoriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const helmHandler = app
  .openapi(getEndpointsIdKubernetesHelmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEndpointsIdKubernetesHelmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEndpointsIdKubernetesHelmReleaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsIdKubernetesHelmReleaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsIdKubernetesHelmReleaseHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEndpointsIdKubernetesHelmReleaseRollbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesHelmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplatesHelmCommandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdHelmRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIdHelmRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersIdHelmRepositoriesRepositoryIDRoute, (c) => {
    throw new Error('Not implemented')
  })
