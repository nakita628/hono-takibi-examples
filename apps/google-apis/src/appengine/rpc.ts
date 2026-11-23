import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1betaApps(
  args: InferRequestType<typeof client.v1beta.apps.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta.apps.$post(args, options))
}

export async function getV1betaAppsAppsId(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta.apps[':appsId'].$get(args, options))
}

export async function patchV1betaAppsAppsId(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta.apps[':appsId'].$patch(args, options))
}

export async function getV1betaAppsAppsIdAuthorizedCertificates(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['authorizedCertificates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.apps[':appsId'].authorizedCertificates.$get(args, options),
  )
}

export async function postV1betaAppsAppsIdAuthorizedCertificates(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['authorizedCertificates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.apps[':appsId'].authorizedCertificates.$post(args, options),
  )
}

export async function getV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesId(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['authorizedCertificates'][':authorizedCertificatesId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.apps[':appsId'].authorizedCertificates[':authorizedCertificatesId'].$get(
      args,
      options,
    ),
  )
}

export async function deleteV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesId(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['authorizedCertificates'][':authorizedCertificatesId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.apps[':appsId'].authorizedCertificates[':authorizedCertificatesId'].$delete(
      args,
      options,
    ),
  )
}

export async function patchV1betaAppsAppsIdAuthorizedCertificatesAuthorizedCertificatesId(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['authorizedCertificates'][':authorizedCertificatesId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.apps[':appsId'].authorizedCertificates[':authorizedCertificatesId'].$patch(
      args,
      options,
    ),
  )
}

export async function getV1betaAppsAppsIdAuthorizedDomains(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['authorizedDomains']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta.apps[':appsId'].authorizedDomains.$get(args, options))
}

export async function getV1betaAppsAppsIdDomainMappings(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['domainMappings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta.apps[':appsId'].domainMappings.$get(args, options))
}

export async function postV1betaAppsAppsIdDomainMappings(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['domainMappings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta.apps[':appsId'].domainMappings.$post(args, options))
}

export async function getV1betaAppsAppsIdDomainMappingsDomainMappingsId(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['domainMappings'][':domainMappingsId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.apps[':appsId'].domainMappings[':domainMappingsId'].$get(args, options),
  )
}

export async function deleteV1betaAppsAppsIdDomainMappingsDomainMappingsId(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['domainMappings'][':domainMappingsId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.apps[':appsId'].domainMappings[':domainMappingsId'].$delete(args, options),
  )
}

export async function patchV1betaAppsAppsIdDomainMappingsDomainMappingsId(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['domainMappings'][':domainMappingsId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.apps[':appsId'].domainMappings[':domainMappingsId'].$patch(args, options),
  )
}

export async function getV1betaAppsAppsIdFirewallIngressRules(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.apps[':appsId'].firewall.ingressRules.$get(args, options),
  )
}

export async function postV1betaAppsAppsIdFirewallIngressRules(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.apps[':appsId'].firewall.ingressRules.$post(args, options),
  )
}

export async function getV1betaAppsAppsIdFirewallIngressRulesIngressRulesId(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules'][':ingressRulesId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.apps[':appsId'].firewall.ingressRules[':ingressRulesId'].$get(args, options),
  )
}

export async function deleteV1betaAppsAppsIdFirewallIngressRulesIngressRulesId(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules'][':ingressRulesId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.apps[':appsId'].firewall.ingressRules[':ingressRulesId'].$delete(args, options),
  )
}

export async function patchV1betaAppsAppsIdFirewallIngressRulesIngressRulesId(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules'][':ingressRulesId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.apps[':appsId'].firewall.ingressRules[':ingressRulesId'].$patch(args, options),
  )
}

export async function postV1betaAppsAppsIdFirewallIngressRulesBatchUpdate(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['firewall']['ingressRules:batchUpdate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.apps[':appsId'].firewall['ingressRules:batchUpdate'].$post(args, options),
  )
}

export async function getV1betaAppsAppsIdLocations(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta.apps[':appsId'].locations.$get(args, options))
}

export async function getV1betaAppsAppsIdLocationsLocationsId(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['locations'][':locationsId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.apps[':appsId'].locations[':locationsId'].$get(args, options),
  )
}

export async function getV1betaAppsAppsIdOperations(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta.apps[':appsId'].operations.$get(args, options))
}

export async function getV1betaAppsAppsIdOperationsOperationsId(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['operations'][':operationsId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.apps[':appsId'].operations[':operationsId'].$get(args, options),
  )
}

export async function getV1betaAppsAppsIdServices(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['services']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta.apps[':appsId'].services.$get(args, options))
}

export async function getV1betaAppsAppsIdServicesServicesId(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.apps[':appsId'].services[':servicesId'].$get(args, options),
  )
}

export async function deleteV1betaAppsAppsIdServicesServicesId(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.apps[':appsId'].services[':servicesId'].$delete(args, options),
  )
}

export async function patchV1betaAppsAppsIdServicesServicesId(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.apps[':appsId'].services[':servicesId'].$patch(args, options),
  )
}

export async function getV1betaAppsAppsIdServicesServicesIdVersions(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.apps[':appsId'].services[':servicesId'].versions.$get(args, options),
  )
}

export async function postV1betaAppsAppsIdServicesServicesIdVersions(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.apps[':appsId'].services[':servicesId'].versions.$post(args, options),
  )
}

export async function getV1betaAppsAppsIdServicesServicesIdVersionsVersionsId(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.apps[':appsId'].services[':servicesId'].versions[':versionsId'].$get(
      args,
      options,
    ),
  )
}

export async function deleteV1betaAppsAppsIdServicesServicesIdVersionsVersionsId(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.apps[':appsId'].services[':servicesId'].versions[':versionsId'].$delete(
      args,
      options,
    ),
  )
}

export async function patchV1betaAppsAppsIdServicesServicesIdVersionsVersionsId(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.apps[':appsId'].services[':servicesId'].versions[':versionsId'].$patch(
      args,
      options,
    ),
  )
}

export async function getV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstances(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.apps[':appsId'].services[':servicesId'].versions[':versionsId'].instances.$get(
      args,
      options,
    ),
  )
}

export async function getV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesId(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances'][':instancesId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.apps[':appsId'].services[':servicesId'].versions[':versionsId'].instances[
      ':instancesId'
    ].$get(args, options),
  )
}

export async function deleteV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesId(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances'][':instancesId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.apps[':appsId'].services[':servicesId'].versions[':versionsId'].instances[
      ':instancesId'
    ].$delete(args, options),
  )
}

export async function postV1betaAppsAppsIdServicesServicesIdVersionsVersionsIdInstancesInstancesIdDebug(
  args: InferRequestType<
    (typeof client.v1beta.apps)[':appsId']['services'][':servicesId']['versions'][':versionsId']['instances'][':instancesId:debug']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.apps[':appsId'].services[':servicesId'].versions[':versionsId'].instances[
      ':instancesId:debug'
    ].$post(args, options),
  )
}

export async function postV1betaAppsAppsIdRepair(
  args: InferRequestType<(typeof client.v1beta.apps)[':appsId:repair']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta.apps[':appsId:repair'].$post(args, options))
}

export async function getV1betaProjectsProjectsIdLocations(
  args: InferRequestType<(typeof client.v1beta.projects)[':projectsId']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta.projects[':projectsId'].locations.$get(args, options))
}

export async function getV1betaProjectsProjectsIdLocationsLocationsId(
  args: InferRequestType<
    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.projects[':projectsId'].locations[':locationsId'].$get(args, options),
  )
}

export async function postV1betaProjectsProjectsIdLocationsLocationsIdApplications(
  args: InferRequestType<
    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['applications']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.projects[':projectsId'].locations[':locationsId'].applications.$post(
      args,
      options,
    ),
  )
}

export async function getV1betaProjectsProjectsIdLocationsLocationsIdApplicationsApplicationsId(
  args: InferRequestType<
    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['applications'][':applicationsId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.projects[':projectsId'].locations[':locationsId'].applications[
      ':applicationsId'
    ].$get(args, options),
  )
}

export async function postV1betaProjectsProjectsIdLocationsLocationsIdApplicationsApplicationsIdRepair(
  args: InferRequestType<
    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['applications'][':applicationsId:repair']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.projects[':projectsId'].locations[':locationsId'].applications[
      ':applicationsId:repair'
    ].$post(args, options),
  )
}

export async function getV1betaProjectsProjectsIdLocationsLocationsIdOperations(
  args: InferRequestType<
    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.projects[':projectsId'].locations[':locationsId'].operations.$get(args, options),
  )
}

export async function getV1betaProjectsProjectsIdLocationsLocationsIdOperationsOperationsId(
  args: InferRequestType<
    (typeof client.v1beta.projects)[':projectsId']['locations'][':locationsId']['operations'][':operationsId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta.projects[':projectsId'].locations[':locationsId'].operations[
      ':operationsId'
    ].$get(args, options),
  )
}
