import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApisResourceK8sIoV1DeviceclassesNameRoute,
  deleteApisResourceK8sIoV1DeviceclassesRoute,
  deleteApisResourceK8sIoV1DevicetaintrulesNameRoute,
  deleteApisResourceK8sIoV1DevicetaintrulesRoute,
  deleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameRoute,
  deleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimsRoute,
  deleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameRoute,
  deleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesRoute,
  deleteApisResourceK8sIoV1ResourceslicesNameRoute,
  deleteApisResourceK8sIoV1ResourceslicesRoute,
  getApisResourceK8sIoV1DeviceclassesNameRoute,
  getApisResourceK8sIoV1DeviceclassesRoute,
  getApisResourceK8sIoV1DevicetaintrulesNameRoute,
  getApisResourceK8sIoV1DevicetaintrulesNameStatusRoute,
  getApisResourceK8sIoV1DevicetaintrulesRoute,
  getApisResourceK8sIoV1IndexRoute,
  getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameRoute,
  getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatusRoute,
  getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsRoute,
  getApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameRoute,
  getApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesRoute,
  getApisResourceK8sIoV1ResourceclaimsRoute,
  getApisResourceK8sIoV1ResourceclaimtemplatesRoute,
  getApisResourceK8sIoV1ResourceslicesNameRoute,
  getApisResourceK8sIoV1ResourceslicesRoute,
  getApisResourceK8sIoV1WatchDeviceclassesNameRoute,
  getApisResourceK8sIoV1WatchDeviceclassesRoute,
  getApisResourceK8sIoV1WatchDevicetaintrulesNameRoute,
  getApisResourceK8sIoV1WatchDevicetaintrulesRoute,
  getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimsNameRoute,
  getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimsRoute,
  getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplatesNameRoute,
  getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplatesRoute,
  getApisResourceK8sIoV1WatchResourceclaimsRoute,
  getApisResourceK8sIoV1WatchResourceclaimtemplatesRoute,
  getApisResourceK8sIoV1WatchResourceslicesNameRoute,
  getApisResourceK8sIoV1WatchResourceslicesRoute,
  patchApisResourceK8sIoV1DeviceclassesNameRoute,
  patchApisResourceK8sIoV1DevicetaintrulesNameRoute,
  patchApisResourceK8sIoV1DevicetaintrulesNameStatusRoute,
  patchApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameRoute,
  patchApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatusRoute,
  patchApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameRoute,
  patchApisResourceK8sIoV1ResourceslicesNameRoute,
  postApisResourceK8sIoV1DeviceclassesRoute,
  postApisResourceK8sIoV1DevicetaintrulesRoute,
  postApisResourceK8sIoV1NamespacesNamespaceResourceclaimsRoute,
  postApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesRoute,
  postApisResourceK8sIoV1ResourceslicesRoute,
  putApisResourceK8sIoV1DeviceclassesNameRoute,
  putApisResourceK8sIoV1DevicetaintrulesNameRoute,
  putApisResourceK8sIoV1DevicetaintrulesNameStatusRoute,
  putApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameRoute,
  putApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatusRoute,
  putApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameRoute,
  putApisResourceK8sIoV1ResourceslicesNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const resourceV1Handler = app
  .openapi(getApisResourceK8sIoV1IndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisResourceK8sIoV1DeviceclassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisResourceK8sIoV1DeviceclassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisResourceK8sIoV1DeviceclassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisResourceK8sIoV1DeviceclassesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisResourceK8sIoV1DeviceclassesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisResourceK8sIoV1DeviceclassesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisResourceK8sIoV1DeviceclassesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisResourceK8sIoV1DevicetaintrulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisResourceK8sIoV1DevicetaintrulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisResourceK8sIoV1DevicetaintrulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisResourceK8sIoV1DevicetaintrulesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisResourceK8sIoV1DevicetaintrulesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisResourceK8sIoV1DevicetaintrulesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisResourceK8sIoV1DevicetaintrulesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisResourceK8sIoV1DevicetaintrulesNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisResourceK8sIoV1DevicetaintrulesNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisResourceK8sIoV1DevicetaintrulesNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisResourceK8sIoV1NamespacesNamespaceResourceclaimsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisResourceK8sIoV1ResourceclaimsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisResourceK8sIoV1ResourceclaimtemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisResourceK8sIoV1ResourceslicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisResourceK8sIoV1ResourceslicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApisResourceK8sIoV1ResourceslicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApisResourceK8sIoV1ResourceslicesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisResourceK8sIoV1ResourceslicesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApisResourceK8sIoV1ResourceslicesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApisResourceK8sIoV1ResourceslicesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisResourceK8sIoV1WatchDeviceclassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisResourceK8sIoV1WatchDeviceclassesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisResourceK8sIoV1WatchDevicetaintrulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisResourceK8sIoV1WatchDevicetaintrulesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplatesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisResourceK8sIoV1WatchResourceclaimsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisResourceK8sIoV1WatchResourceclaimtemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisResourceK8sIoV1WatchResourceslicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApisResourceK8sIoV1WatchResourceslicesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
