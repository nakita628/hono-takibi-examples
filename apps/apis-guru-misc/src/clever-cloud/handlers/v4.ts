import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersPeerIdRoute,
  deleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdRoute,
  deleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdRoute,
  deleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdRoute,
  getV4AddonProvidersAddonMatomoAddonsMatomoIdRoute,
  getV4AddonProvidersAddonMatomoTokenValidateRoute,
  getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvRoute,
  getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdRoute,
  getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdRoute,
  getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersRoute,
  getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdRoute,
  getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationRoute,
  getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationStreamRoute,
  getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersRoute,
  getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdRoute,
  getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdStreamRoute,
  getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsRoute,
  postV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersRoute,
  postV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersRoute,
  postV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsRoute,
  putV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v4Handler = app
  .openapi(getV4AddonProvidersAddonMatomoAddonsMatomoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4AddonProvidersAddonMatomoTokenValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersPeerIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationStreamRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
