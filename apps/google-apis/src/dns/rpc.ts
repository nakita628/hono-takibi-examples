import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getDnsV2ProjectsProjectLocationsLocation(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dns.v2.projects[':project'].locations[':location'].$get(args, options),
  )
}

export async function getDnsV2ProjectsProjectLocationsLocationManagedZones(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dns.v2.projects[':project'].locations[':location'].managedZones.$get(args, options),
  )
}

export async function postDnsV2ProjectsProjectLocationsLocationManagedZones(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dns.v2.projects[':project'].locations[':location'].managedZones.$post(args, options),
  )
}

export async function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZone(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dns.v2.projects[':project'].locations[':location'].managedZones[':managedZone'].$get(
      args,
      options,
    ),
  )
}

export async function putDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZone(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dns.v2.projects[':project'].locations[':location'].managedZones[':managedZone'].$put(
      args,
      options,
    ),
  )
}

export async function deleteDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZone(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dns.v2.projects[':project'].locations[':location'].managedZones[':managedZone'].$delete(
      args,
      options,
    ),
  )
}

export async function patchDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZone(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dns.v2.projects[':project'].locations[':location'].managedZones[':managedZone'].$patch(
      args,
      options,
    ),
  )
}

export async function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChanges(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['changes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dns.v2.projects[':project'].locations[':location'].managedZones[
      ':managedZone'
    ].changes.$get(args, options),
  )
}

export async function postDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChanges(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['changes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dns.v2.projects[':project'].locations[':location'].managedZones[
      ':managedZone'
    ].changes.$post(args, options),
  )
}

export async function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneChangesChangeId(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['changes'][':changeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dns.v2.projects[':project'].locations[':location'].managedZones[':managedZone'].changes[
      ':changeId'
    ].$get(args, options),
  )
}

export async function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeys(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['dnsKeys']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dns.v2.projects[':project'].locations[':location'].managedZones[
      ':managedZone'
    ].dnsKeys.$get(args, options),
  )
}

export async function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneDnsKeysDnsKeyId(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['dnsKeys'][':dnsKeyId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dns.v2.projects[':project'].locations[':location'].managedZones[':managedZone'].dnsKeys[
      ':dnsKeyId'
    ].$get(args, options),
  )
}

export async function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperations(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['operations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dns.v2.projects[':project'].locations[':location'].managedZones[
      ':managedZone'
    ].operations.$get(args, options),
  )
}

export async function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneOperationsOperation(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['operations'][':operation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dns.v2.projects[':project'].locations[':location'].managedZones[
      ':managedZone'
    ].operations[':operation'].$get(args, options),
  )
}

export async function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsets(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dns.v2.projects[':project'].locations[':location'].managedZones[
      ':managedZone'
    ].rrsets.$get(args, options),
  )
}

export async function postDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsets(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dns.v2.projects[':project'].locations[':location'].managedZones[
      ':managedZone'
    ].rrsets.$post(args, options),
  )
}

export async function getDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameType(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets'][':name'][':type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dns.v2.projects[':project'].locations[':location'].managedZones[':managedZone'].rrsets[
      ':name'
    ][':type'].$get(args, options),
  )
}

export async function deleteDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameType(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets'][':name'][':type']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dns.v2.projects[':project'].locations[':location'].managedZones[':managedZone'].rrsets[
      ':name'
    ][':type'].$delete(args, options),
  )
}

export async function patchDnsV2ProjectsProjectLocationsLocationManagedZonesManagedZoneRrsetsNameType(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['managedZones'][':managedZone']['rrsets'][':name'][':type']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dns.v2.projects[':project'].locations[':location'].managedZones[':managedZone'].rrsets[
      ':name'
    ][':type'].$patch(args, options),
  )
}

export async function getDnsV2ProjectsProjectLocationsLocationPolicies(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dns.v2.projects[':project'].locations[':location'].policies.$get(args, options),
  )
}

export async function postDnsV2ProjectsProjectLocationsLocationPolicies(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dns.v2.projects[':project'].locations[':location'].policies.$post(args, options),
  )
}

export async function getDnsV2ProjectsProjectLocationsLocationPoliciesPolicy(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies'][':policy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dns.v2.projects[':project'].locations[':location'].policies[':policy'].$get(
      args,
      options,
    ),
  )
}

export async function putDnsV2ProjectsProjectLocationsLocationPoliciesPolicy(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies'][':policy']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dns.v2.projects[':project'].locations[':location'].policies[':policy'].$put(
      args,
      options,
    ),
  )
}

export async function deleteDnsV2ProjectsProjectLocationsLocationPoliciesPolicy(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies'][':policy']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dns.v2.projects[':project'].locations[':location'].policies[':policy'].$delete(
      args,
      options,
    ),
  )
}

export async function patchDnsV2ProjectsProjectLocationsLocationPoliciesPolicy(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['policies'][':policy']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dns.v2.projects[':project'].locations[':location'].policies[':policy'].$patch(
      args,
      options,
    ),
  )
}

export async function getDnsV2ProjectsProjectLocationsLocationResponsePolicies(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dns.v2.projects[':project'].locations[':location'].responsePolicies.$get(args, options),
  )
}

export async function postDnsV2ProjectsProjectLocationsLocationResponsePolicies(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dns.v2.projects[':project'].locations[':location'].responsePolicies.$post(args, options),
  )
}

export async function getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicy(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dns.v2.projects[':project'].locations[':location'].responsePolicies[
      ':responsePolicy'
    ].$get(args, options),
  )
}

export async function putDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicy(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dns.v2.projects[':project'].locations[':location'].responsePolicies[
      ':responsePolicy'
    ].$put(args, options),
  )
}

export async function deleteDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicy(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dns.v2.projects[':project'].locations[':location'].responsePolicies[
      ':responsePolicy'
    ].$delete(args, options),
  )
}

export async function patchDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicy(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dns.v2.projects[':project'].locations[':location'].responsePolicies[
      ':responsePolicy'
    ].$patch(args, options),
  )
}

export async function getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRules(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dns.v2.projects[':project'].locations[':location'].responsePolicies[
      ':responsePolicy'
    ].rules.$get(args, options),
  )
}

export async function postDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRules(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dns.v2.projects[':project'].locations[':location'].responsePolicies[
      ':responsePolicy'
    ].rules.$post(args, options),
  )
}

export async function getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRule(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules'][':responsePolicyRule']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dns.v2.projects[':project'].locations[':location'].responsePolicies[
      ':responsePolicy'
    ].rules[':responsePolicyRule'].$get(args, options),
  )
}

export async function putDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRule(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules'][':responsePolicyRule']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dns.v2.projects[':project'].locations[':location'].responsePolicies[
      ':responsePolicy'
    ].rules[':responsePolicyRule'].$put(args, options),
  )
}

export async function deleteDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRule(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules'][':responsePolicyRule']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dns.v2.projects[':project'].locations[':location'].responsePolicies[
      ':responsePolicy'
    ].rules[':responsePolicyRule'].$delete(args, options),
  )
}

export async function patchDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRule(
  args: InferRequestType<
    (typeof client.dns.v2.projects)[':project']['locations'][':location']['responsePolicies'][':responsePolicy']['rules'][':responsePolicyRule']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.dns.v2.projects[':project'].locations[':location'].responsePolicies[
      ':responsePolicy'
    ].rules[':responsePolicyRule'].$patch(args, options),
  )
}

export async function postDnsV2ResourceGetIamPolicy(
  args: InferRequestType<(typeof client.dns.v2)[':resource:getIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dns.v2[':resource:getIamPolicy'].$post(args, options))
}

export async function postDnsV2ResourceSetIamPolicy(
  args: InferRequestType<(typeof client.dns.v2)[':resource:setIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dns.v2[':resource:setIamPolicy'].$post(args, options))
}

export async function postDnsV2ResourceTestIamPermissions(
  args: InferRequestType<(typeof client.dns.v2)[':resource:testIamPermissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dns.v2[':resource:testIamPermissions'].$post(args, options))
}
