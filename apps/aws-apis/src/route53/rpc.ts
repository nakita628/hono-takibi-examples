import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function post20130401KeysigningkeyHostedZoneIdNameActivate(
  args: InferRequestType<
    (typeof client)['2013-04-01']['keysigningkey'][':HostedZoneId'][':Name']['activate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2013-04-01'].keysigningkey[':HostedZoneId'][':Name'].activate.$post(args, options),
  )
}

export async function post20130401HostedzoneIdAssociatevpc(
  args: InferRequestType<
    (typeof client)['2013-04-01']['hostedzone'][':Id']['associatevpc']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2013-04-01'].hostedzone[':Id'].associatevpc.$post(args, options),
  )
}

export async function get20130401CidrcollectionCidrCollectionId(
  args: InferRequestType<
    (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2013-04-01'].cidrcollection[':CidrCollectionId'].$get(args, options),
  )
}

export async function post20130401CidrcollectionCidrCollectionId(
  args: InferRequestType<
    (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2013-04-01'].cidrcollection[':CidrCollectionId'].$post(args, options),
  )
}

export async function delete20130401CidrcollectionCidrCollectionId(
  args: InferRequestType<
    (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2013-04-01'].cidrcollection[':CidrCollectionId'].$delete(args, options),
  )
}

export async function post20130401HostedzoneIdRrsetIndex(
  args: InferRequestType<
    (typeof client)['2013-04-01']['hostedzone'][':Id']['rrset']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2013-04-01'].hostedzone[':Id'].rrset.index.$post(args, options),
  )
}

export async function get20130401TagsResourceTypeResourceId(
  args: InferRequestType<
    (typeof client)['2013-04-01']['tags'][':ResourceType'][':ResourceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2013-04-01'].tags[':ResourceType'][':ResourceId'].$get(args, options),
  )
}

export async function post20130401TagsResourceTypeResourceId(
  args: InferRequestType<
    (typeof client)['2013-04-01']['tags'][':ResourceType'][':ResourceId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2013-04-01'].tags[':ResourceType'][':ResourceId'].$post(args, options),
  )
}

export async function get20130401Cidrcollection(
  args: InferRequestType<(typeof client)['2013-04-01']['cidrcollection']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2013-04-01'].cidrcollection.$get(args, options))
}

export async function post20130401Cidrcollection(
  args: InferRequestType<(typeof client)['2013-04-01']['cidrcollection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2013-04-01'].cidrcollection.$post(args, options))
}

export async function get20130401Healthcheck(
  args: InferRequestType<(typeof client)['2013-04-01']['healthcheck']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2013-04-01'].healthcheck.$get(args, options))
}

export async function post20130401Healthcheck(
  args: InferRequestType<(typeof client)['2013-04-01']['healthcheck']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2013-04-01'].healthcheck.$post(args, options))
}

export async function get20130401Hostedzone(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzone']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2013-04-01'].hostedzone.$get(args, options))
}

export async function post20130401Hostedzone(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzone']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2013-04-01'].hostedzone.$post(args, options))
}

export async function post20130401Keysigningkey(
  args: InferRequestType<(typeof client)['2013-04-01']['keysigningkey']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2013-04-01'].keysigningkey.$post(args, options))
}

export async function get20130401Queryloggingconfig(
  args: InferRequestType<(typeof client)['2013-04-01']['queryloggingconfig']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2013-04-01'].queryloggingconfig.$get(args, options))
}

export async function post20130401Queryloggingconfig(
  args: InferRequestType<(typeof client)['2013-04-01']['queryloggingconfig']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2013-04-01'].queryloggingconfig.$post(args, options))
}

export async function get20130401Delegationset(
  args: InferRequestType<(typeof client)['2013-04-01']['delegationset']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2013-04-01'].delegationset.$get(args, options))
}

export async function post20130401Delegationset(
  args: InferRequestType<(typeof client)['2013-04-01']['delegationset']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2013-04-01'].delegationset.$post(args, options))
}

export async function post20130401Trafficpolicy(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2013-04-01'].trafficpolicy.$post(args, options))
}

export async function post20130401Trafficpolicyinstance(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstance']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2013-04-01'].trafficpolicyinstance.$post(args, options))
}

export async function post20130401TrafficpolicyId(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicy'][':Id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2013-04-01'].trafficpolicy[':Id'].$post(args, options))
}

export async function get20130401HostedzoneIdAuthorizevpcassociation(
  args: InferRequestType<
    (typeof client)['2013-04-01']['hostedzone'][':Id']['authorizevpcassociation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2013-04-01'].hostedzone[':Id'].authorizevpcassociation.$get(args, options),
  )
}

export async function post20130401HostedzoneIdAuthorizevpcassociation(
  args: InferRequestType<
    (typeof client)['2013-04-01']['hostedzone'][':Id']['authorizevpcassociation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2013-04-01'].hostedzone[':Id'].authorizevpcassociation.$post(args, options),
  )
}

export async function post20130401KeysigningkeyHostedZoneIdNameDeactivate(
  args: InferRequestType<
    (typeof client)['2013-04-01']['keysigningkey'][':HostedZoneId'][':Name']['deactivate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2013-04-01'].keysigningkey[':HostedZoneId'][':Name'].deactivate.$post(args, options),
  )
}

export async function get20130401HealthcheckHealthCheckId(
  args: InferRequestType<(typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2013-04-01'].healthcheck[':HealthCheckId'].$get(args, options))
}

export async function post20130401HealthcheckHealthCheckId(
  args: InferRequestType<(typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2013-04-01'].healthcheck[':HealthCheckId'].$post(args, options),
  )
}

export async function delete20130401HealthcheckHealthCheckId(
  args: InferRequestType<(typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2013-04-01'].healthcheck[':HealthCheckId'].$delete(args, options),
  )
}

export async function get20130401HostedzoneId(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2013-04-01'].hostedzone[':Id'].$get(args, options))
}

export async function post20130401HostedzoneId(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2013-04-01'].hostedzone[':Id'].$post(args, options))
}

export async function delete20130401HostedzoneId(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2013-04-01'].hostedzone[':Id'].$delete(args, options))
}

export async function delete20130401KeysigningkeyHostedZoneIdName(
  args: InferRequestType<
    (typeof client)['2013-04-01']['keysigningkey'][':HostedZoneId'][':Name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2013-04-01'].keysigningkey[':HostedZoneId'][':Name'].$delete(args, options),
  )
}

export async function get20130401QueryloggingconfigId(
  args: InferRequestType<(typeof client)['2013-04-01']['queryloggingconfig'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2013-04-01'].queryloggingconfig[':Id'].$get(args, options))
}

export async function delete20130401QueryloggingconfigId(
  args: InferRequestType<(typeof client)['2013-04-01']['queryloggingconfig'][':Id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2013-04-01'].queryloggingconfig[':Id'].$delete(args, options))
}

export async function get20130401DelegationsetId(
  args: InferRequestType<(typeof client)['2013-04-01']['delegationset'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2013-04-01'].delegationset[':Id'].$get(args, options))
}

export async function delete20130401DelegationsetId(
  args: InferRequestType<(typeof client)['2013-04-01']['delegationset'][':Id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2013-04-01'].delegationset[':Id'].$delete(args, options))
}

export async function get20130401TrafficpolicyIdVersion(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2013-04-01'].trafficpolicy[':Id'][':Version'].$get(args, options),
  )
}

export async function post20130401TrafficpolicyIdVersion(
  args: InferRequestType<
    (typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2013-04-01'].trafficpolicy[':Id'][':Version'].$post(args, options),
  )
}

export async function delete20130401TrafficpolicyIdVersion(
  args: InferRequestType<
    (typeof client)['2013-04-01']['trafficpolicy'][':Id'][':Version']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2013-04-01'].trafficpolicy[':Id'][':Version'].$delete(args, options),
  )
}

export async function get20130401TrafficpolicyinstanceId(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2013-04-01'].trafficpolicyinstance[':Id'].$get(args, options))
}

export async function post20130401TrafficpolicyinstanceId(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2013-04-01'].trafficpolicyinstance[':Id'].$post(args, options))
}

export async function delete20130401TrafficpolicyinstanceId(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstance'][':Id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2013-04-01'].trafficpolicyinstance[':Id'].$delete(args, options),
  )
}

export async function post20130401HostedzoneIdDeauthorizevpcassociation(
  args: InferRequestType<
    (typeof client)['2013-04-01']['hostedzone'][':Id']['deauthorizevpcassociation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2013-04-01'].hostedzone[':Id'].deauthorizevpcassociation.$post(args, options),
  )
}

export async function post20130401HostedzoneIdDisableDnssec(
  args: InferRequestType<
    (typeof client)['2013-04-01']['hostedzone'][':Id']['disable-dnssec']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2013-04-01'].hostedzone[':Id']['disable-dnssec'].$post(args, options),
  )
}

export async function post20130401HostedzoneIdDisassociatevpc(
  args: InferRequestType<
    (typeof client)['2013-04-01']['hostedzone'][':Id']['disassociatevpc']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2013-04-01'].hostedzone[':Id'].disassociatevpc.$post(args, options),
  )
}

export async function post20130401HostedzoneIdEnableDnssec(
  args: InferRequestType<
    (typeof client)['2013-04-01']['hostedzone'][':Id']['enable-dnssec']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2013-04-01'].hostedzone[':Id']['enable-dnssec'].$post(args, options),
  )
}

export async function get20130401AccountlimitType(
  args: InferRequestType<(typeof client)['2013-04-01']['accountlimit'][':Type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2013-04-01'].accountlimit[':Type'].$get(args, options))
}

export async function get20130401ChangeId(
  args: InferRequestType<(typeof client)['2013-04-01']['change'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2013-04-01'].change[':Id'].$get(args, options))
}

export async function get20130401Checkeripranges(
  args: InferRequestType<(typeof client)['2013-04-01']['checkeripranges']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2013-04-01'].checkeripranges.$get(args, options))
}

export async function get20130401HostedzoneIdDnssec(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['dnssec']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2013-04-01'].hostedzone[':Id'].dnssec.$get(args, options))
}

export async function get20130401Geolocation(
  args: InferRequestType<(typeof client)['2013-04-01']['geolocation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2013-04-01'].geolocation.$get(args, options))
}

export async function get20130401Healthcheckcount(
  args: InferRequestType<(typeof client)['2013-04-01']['healthcheckcount']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2013-04-01'].healthcheckcount.$get(args, options))
}

export async function get20130401HealthcheckHealthCheckIdLastfailurereason(
  args: InferRequestType<
    (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['lastfailurereason']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2013-04-01'].healthcheck[':HealthCheckId'].lastfailurereason.$get(args, options),
  )
}

export async function get20130401HealthcheckHealthCheckIdStatus(
  args: InferRequestType<
    (typeof client)['2013-04-01']['healthcheck'][':HealthCheckId']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2013-04-01'].healthcheck[':HealthCheckId'].status.$get(args, options),
  )
}

export async function get20130401Hostedzonecount(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzonecount']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2013-04-01'].hostedzonecount.$get(args, options))
}

export async function get20130401HostedzonelimitIdType(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzonelimit'][':Id'][':Type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2013-04-01'].hostedzonelimit[':Id'][':Type'].$get(args, options),
  )
}

export async function get20130401ReusabledelegationsetlimitIdType(
  args: InferRequestType<
    (typeof client)['2013-04-01']['reusabledelegationsetlimit'][':Id'][':Type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2013-04-01'].reusabledelegationsetlimit[':Id'][':Type'].$get(args, options),
  )
}

export async function get20130401Trafficpolicyinstancecount(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstancecount']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2013-04-01'].trafficpolicyinstancecount.$get(args, options))
}

export async function get20130401CidrcollectionCidrCollectionIdCidrblocks(
  args: InferRequestType<
    (typeof client)['2013-04-01']['cidrcollection'][':CidrCollectionId']['cidrblocks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2013-04-01'].cidrcollection[':CidrCollectionId'].cidrblocks.$get(args, options),
  )
}

export async function get20130401Geolocations(
  args: InferRequestType<(typeof client)['2013-04-01']['geolocations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2013-04-01'].geolocations.$get(args, options))
}

export async function get20130401Hostedzonesbyname(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzonesbyname']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2013-04-01'].hostedzonesbyname.$get(args, options))
}

export async function get20130401HostedzonesbyvpcVpcidVpcregion(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzonesbyvpc#vpcid&vpcregion']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2013-04-01']['hostedzonesbyvpc#vpcid&vpcregion'].$get(args, options),
  )
}

export async function get20130401HostedzoneIdRrset(
  args: InferRequestType<(typeof client)['2013-04-01']['hostedzone'][':Id']['rrset']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2013-04-01'].hostedzone[':Id'].rrset.$get(args, options))
}

export async function post20130401TagsResourceType(
  args: InferRequestType<(typeof client)['2013-04-01']['tags'][':ResourceType']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2013-04-01'].tags[':ResourceType'].$post(args, options))
}

export async function get20130401Trafficpolicies(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2013-04-01'].trafficpolicies.$get(args, options))
}

export async function get20130401Trafficpolicyinstances(
  args: InferRequestType<(typeof client)['2013-04-01']['trafficpolicyinstances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2013-04-01'].trafficpolicyinstances.$get(args, options))
}

export async function get20130401TrafficpolicyinstancesHostedzoneId(
  args: InferRequestType<
    (typeof client)['2013-04-01']['trafficpolicyinstances']['hostedzone#id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2013-04-01'].trafficpolicyinstances['hostedzone#id'].$get(args, options),
  )
}

export async function get20130401TrafficpolicyinstancesTrafficpolicyIdVersion(
  args: InferRequestType<
    (typeof client)['2013-04-01']['trafficpolicyinstances']['trafficpolicy#id&version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2013-04-01'].trafficpolicyinstances['trafficpolicy#id&version'].$get(args, options),
  )
}

export async function get20130401TrafficpoliciesIdVersions(
  args: InferRequestType<
    (typeof client)['2013-04-01']['trafficpolicies'][':Id']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2013-04-01'].trafficpolicies[':Id'].versions.$get(args, options),
  )
}

export async function get20130401TestdnsanswerHostedzoneidRecordnameRecordtype(
  args: InferRequestType<
    (typeof client)['2013-04-01']['testdnsanswer#hostedzoneid&recordname&recordtype']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2013-04-01']['testdnsanswer#hostedzoneid&recordname&recordtype'].$get(args, options),
  )
}
