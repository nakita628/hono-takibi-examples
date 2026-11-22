import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1VoicesCollectionsCollectionIdRoute,
  deleteV1VoicesCollectionsCollectionIdVoiceVoiceIdRoute,
  deleteV1VoicesVoiceIdRoute,
  getV1SharedVoicesRoute,
  getV1VoicesAccentsRoute,
  getV1VoicesCollectionsCollectionIdRoute,
  getV1VoicesCollectionsRoute,
  getV1VoicesRoute,
  getV1VoicesSettingsDefaultRoute,
  getV1VoicesVoiceIdRoute,
  getV1VoicesVoiceIdSettingsRoute,
  getV2VoicesRoute,
  patchV1VoicesCollectionsCollectionIdRoute,
  postV1SimilarVoicesRoute,
  postV1VoicesAddPublicUserIdVoiceIdRoute,
  postV1VoicesAddRoute,
  postV1VoicesCollectionsCollectionIdVoiceVoiceIdRoute,
  postV1VoicesCollectionsRoute,
  postV1VoicesVoiceIdEditRoute,
  postV1VoicesVoiceIdReplicateToIsolatedEnvironmentRoute,
  postV1VoicesVoiceIdSettingsEditRoute,
} from '../routes'

const app = new OpenAPIHono()

export const voicesHandler = app
  .openapi(getV1VoicesCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VoicesCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VoicesCollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1VoicesCollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1VoicesCollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VoicesCollectionsCollectionIdVoiceVoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1VoicesCollectionsCollectionIdVoiceVoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VoicesSettingsDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VoicesVoiceIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VoicesVoiceIdSettingsEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VoicesAccentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VoicesVoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1VoicesVoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VoicesVoiceIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VoicesVoiceIdReplicateToIsolatedEnvironmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VoicesAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VoicesAddPublicUserIdVoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SimilarVoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SharedVoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
