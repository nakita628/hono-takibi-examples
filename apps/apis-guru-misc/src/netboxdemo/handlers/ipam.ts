import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIpamAggregatesIdIndexRoute,
  deleteIpamIpAddressesIdIndexRoute,
  deleteIpamPrefixesIdIndexRoute,
  deleteIpamRirsIdIndexRoute,
  deleteIpamRolesIdIndexRoute,
  deleteIpamServicesIdIndexRoute,
  deleteIpamVlanGroupsIdIndexRoute,
  deleteIpamVlansIdIndexRoute,
  deleteIpamVrfsIdIndexRoute,
  getIpamAggregatesIdIndexRoute,
  getIpamAggregatesIndexRoute,
  getIpamIpAddressesIdIndexRoute,
  getIpamIpAddressesIndexRoute,
  getIpamPrefixesIdAvailableIpsIndexRoute,
  getIpamPrefixesIdAvailablePrefixesIndexRoute,
  getIpamPrefixesIdIndexRoute,
  getIpamPrefixesIndexRoute,
  getIpamRirsIdIndexRoute,
  getIpamRirsIndexRoute,
  getIpamRolesIdIndexRoute,
  getIpamRolesIndexRoute,
  getIpamServicesIdIndexRoute,
  getIpamServicesIndexRoute,
  getIpamVlanGroupsIdIndexRoute,
  getIpamVlanGroupsIndexRoute,
  getIpamVlansIdIndexRoute,
  getIpamVlansIndexRoute,
  getIpamVrfsIdIndexRoute,
  getIpamVrfsIndexRoute,
  patchIpamAggregatesIdIndexRoute,
  patchIpamIpAddressesIdIndexRoute,
  patchIpamPrefixesIdIndexRoute,
  patchIpamRirsIdIndexRoute,
  patchIpamRolesIdIndexRoute,
  patchIpamServicesIdIndexRoute,
  patchIpamVlanGroupsIdIndexRoute,
  patchIpamVlansIdIndexRoute,
  patchIpamVrfsIdIndexRoute,
  postIpamAggregatesIndexRoute,
  postIpamIpAddressesIndexRoute,
  postIpamPrefixesIdAvailableIpsIndexRoute,
  postIpamPrefixesIdAvailablePrefixesIndexRoute,
  postIpamPrefixesIndexRoute,
  postIpamRirsIndexRoute,
  postIpamRolesIndexRoute,
  postIpamServicesIndexRoute,
  postIpamVlanGroupsIndexRoute,
  postIpamVlansIndexRoute,
  postIpamVrfsIndexRoute,
  putIpamAggregatesIdIndexRoute,
  putIpamIpAddressesIdIndexRoute,
  putIpamPrefixesIdIndexRoute,
  putIpamRirsIdIndexRoute,
  putIpamRolesIdIndexRoute,
  putIpamServicesIdIndexRoute,
  putIpamVlanGroupsIdIndexRoute,
  putIpamVlansIdIndexRoute,
  putIpamVrfsIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ipamHandler = app
  .openapi(getIpamAggregatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpamAggregatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamAggregatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamAggregatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamAggregatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamAggregatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamIpAddressesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpamIpAddressesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamIpAddressesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamIpAddressesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamIpAddressesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamIpAddressesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamPrefixesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpamPrefixesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamPrefixesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamPrefixesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamPrefixesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamPrefixesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamPrefixesIdAvailableIpsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpamPrefixesIdAvailableIpsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamPrefixesIdAvailablePrefixesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpamPrefixesIdAvailablePrefixesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamRirsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpamRirsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamRirsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamRirsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamRirsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamRirsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpamRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamServicesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpamServicesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamServicesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamServicesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamServicesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamServicesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamVlanGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpamVlanGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamVlanGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamVlanGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamVlanGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamVlanGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamVlansIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpamVlansIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamVlansIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamVlansIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamVlansIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamVlansIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamVrfsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpamVrfsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamVrfsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamVrfsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamVrfsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamVrfsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
