import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function put20150101EsCcsInboundConnectionConnectionIdAccept(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['ccs']['inboundConnection'][':ConnectionId']['accept']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-01-01'].es.ccs.inboundConnection[':ConnectionId'].accept.$put(args, options),
  )
}

export async function post20150101Tags(
  args: InferRequestType<(typeof client)['2015-01-01']['tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2015-01-01'].tags.$post(args, options))
}

export async function post20150101PackagesAssociatePackageIDDomainName(
  args: InferRequestType<
    (typeof client)['2015-01-01']['packages']['associate'][':PackageID'][':DomainName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-01-01'].packages.associate[':PackageID'][':DomainName'].$post(args, options),
  )
}

export async function post20150101EsDomainDomainNameAuthorizeVpcEndpointAccess(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['domain'][':DomainName']['authorizeVpcEndpointAccess']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-01-01'].es.domain[':DomainName'].authorizeVpcEndpointAccess.$post(args, options),
  )
}

export async function post20150101EsServiceSoftwareUpdateCancel(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['serviceSoftwareUpdate']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-01-01'].es.serviceSoftwareUpdate.cancel.$post(args, options),
  )
}

export async function post20150101EsDomain(
  args: InferRequestType<(typeof client)['2015-01-01']['es']['domain']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2015-01-01'].es.domain.$post(args, options))
}

export async function post20150101EsCcsOutboundConnection(
  args: InferRequestType<(typeof client)['2015-01-01']['es']['ccs']['outboundConnection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2015-01-01'].es.ccs.outboundConnection.$post(args, options))
}

export async function post20150101Packages(
  args: InferRequestType<(typeof client)['2015-01-01']['packages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2015-01-01'].packages.$post(args, options))
}

export async function get20150101EsVpcEndpoints(
  args: InferRequestType<(typeof client)['2015-01-01']['es']['vpcEndpoints']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2015-01-01'].es.vpcEndpoints.$get(args, options))
}

export async function post20150101EsVpcEndpoints(
  args: InferRequestType<(typeof client)['2015-01-01']['es']['vpcEndpoints']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2015-01-01'].es.vpcEndpoints.$post(args, options))
}

export async function get20150101EsDomainDomainName(
  args: InferRequestType<(typeof client)['2015-01-01']['es']['domain'][':DomainName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2015-01-01'].es.domain[':DomainName'].$get(args, options))
}

export async function delete20150101EsDomainDomainName(
  args: InferRequestType<(typeof client)['2015-01-01']['es']['domain'][':DomainName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2015-01-01'].es.domain[':DomainName'].$delete(args, options))
}

export async function delete20150101EsRole(
  args: InferRequestType<(typeof client)['2015-01-01']['es']['role']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2015-01-01'].es.role.$delete(args, options))
}

export async function delete20150101EsCcsInboundConnectionConnectionId(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['ccs']['inboundConnection'][':ConnectionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-01-01'].es.ccs.inboundConnection[':ConnectionId'].$delete(args, options),
  )
}

export async function delete20150101EsCcsOutboundConnectionConnectionId(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['ccs']['outboundConnection'][':ConnectionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-01-01'].es.ccs.outboundConnection[':ConnectionId'].$delete(args, options),
  )
}

export async function delete20150101PackagesPackageID(
  args: InferRequestType<(typeof client)['2015-01-01']['packages'][':PackageID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2015-01-01'].packages[':PackageID'].$delete(args, options))
}

export async function delete20150101EsVpcEndpointsVpcEndpointId(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['vpcEndpoints'][':VpcEndpointId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-01-01'].es.vpcEndpoints[':VpcEndpointId'].$delete(args, options),
  )
}

export async function get20150101EsDomainDomainNameAutoTunes(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['domain'][':DomainName']['autoTunes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-01-01'].es.domain[':DomainName'].autoTunes.$get(args, options),
  )
}

export async function get20150101EsDomainDomainNameProgress(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['domain'][':DomainName']['progress']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-01-01'].es.domain[':DomainName'].progress.$get(args, options),
  )
}

export async function get20150101EsDomainDomainNameConfig(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['domain'][':DomainName']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-01-01'].es.domain[':DomainName'].config.$get(args, options),
  )
}

export async function post20150101EsDomainDomainNameConfig(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['domain'][':DomainName']['config']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-01-01'].es.domain[':DomainName'].config.$post(args, options),
  )
}

export async function post20150101EsDomainInfo(
  args: InferRequestType<(typeof client)['2015-01-01']['es']['domain-info']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2015-01-01'].es['domain-info'].$post(args, options))
}

export async function get20150101EsInstanceTypeLimitsElasticsearchVersionInstanceType(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['instanceTypeLimits'][':ElasticsearchVersion'][':InstanceType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-01-01'].es.instanceTypeLimits[':ElasticsearchVersion'][':InstanceType'].$get(
      args,
      options,
    ),
  )
}

export async function post20150101EsCcsInboundConnectionSearch(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['ccs']['inboundConnection']['search']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-01-01'].es.ccs.inboundConnection.search.$post(args, options),
  )
}

export async function post20150101EsCcsOutboundConnectionSearch(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['ccs']['outboundConnection']['search']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-01-01'].es.ccs.outboundConnection.search.$post(args, options),
  )
}

export async function post20150101PackagesDescribe(
  args: InferRequestType<(typeof client)['2015-01-01']['packages']['describe']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2015-01-01'].packages.describe.$post(args, options))
}

export async function get20150101EsReservedInstanceOfferings(
  args: InferRequestType<(typeof client)['2015-01-01']['es']['reservedInstanceOfferings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2015-01-01'].es.reservedInstanceOfferings.$get(args, options))
}

export async function get20150101EsReservedInstances(
  args: InferRequestType<(typeof client)['2015-01-01']['es']['reservedInstances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2015-01-01'].es.reservedInstances.$get(args, options))
}

export async function post20150101EsVpcEndpointsDescribe(
  args: InferRequestType<(typeof client)['2015-01-01']['es']['vpcEndpoints']['describe']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2015-01-01'].es.vpcEndpoints.describe.$post(args, options))
}

export async function post20150101PackagesDissociatePackageIDDomainName(
  args: InferRequestType<
    (typeof client)['2015-01-01']['packages']['dissociate'][':PackageID'][':DomainName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-01-01'].packages.dissociate[':PackageID'][':DomainName'].$post(args, options),
  )
}

export async function get20150101EsCompatibleVersions(
  args: InferRequestType<(typeof client)['2015-01-01']['es']['compatibleVersions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2015-01-01'].es.compatibleVersions.$get(args, options))
}

export async function get20150101PackagesPackageIDHistory(
  args: InferRequestType<
    (typeof client)['2015-01-01']['packages'][':PackageID']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-01-01'].packages[':PackageID'].history.$get(args, options),
  )
}

export async function get20150101EsUpgradeDomainDomainNameHistory(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['upgradeDomain'][':DomainName']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-01-01'].es.upgradeDomain[':DomainName'].history.$get(args, options),
  )
}

export async function get20150101EsUpgradeDomainDomainNameStatus(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['upgradeDomain'][':DomainName']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-01-01'].es.upgradeDomain[':DomainName'].status.$get(args, options),
  )
}

export async function get20150101Domain(
  args: InferRequestType<(typeof client)['2015-01-01']['domain']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2015-01-01'].domain.$get(args, options))
}

export async function get20150101PackagesPackageIDDomains(
  args: InferRequestType<
    (typeof client)['2015-01-01']['packages'][':PackageID']['domains']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-01-01'].packages[':PackageID'].domains.$get(args, options),
  )
}

export async function get20150101EsInstanceTypesElasticsearchVersion(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['instanceTypes'][':ElasticsearchVersion']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-01-01'].es.instanceTypes[':ElasticsearchVersion'].$get(args, options),
  )
}

export async function get20150101EsVersions(
  args: InferRequestType<(typeof client)['2015-01-01']['es']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2015-01-01'].es.versions.$get(args, options))
}

export async function get20150101DomainDomainNamePackages(
  args: InferRequestType<
    (typeof client)['2015-01-01']['domain'][':DomainName']['packages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-01-01'].domain[':DomainName'].packages.$get(args, options),
  )
}

export async function get20150101TagsArn(
  args: InferRequestType<(typeof client)['2015-01-01']['tags']['#arn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2015-01-01'].tags['#arn'].$get(args, options))
}

export async function get20150101EsDomainDomainNameListVpcEndpointAccess(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['domain'][':DomainName']['listVpcEndpointAccess']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-01-01'].es.domain[':DomainName'].listVpcEndpointAccess.$get(args, options),
  )
}

export async function get20150101EsDomainDomainNameVpcEndpoints(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['domain'][':DomainName']['vpcEndpoints']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-01-01'].es.domain[':DomainName'].vpcEndpoints.$get(args, options),
  )
}

export async function post20150101EsPurchaseReservedInstanceOffering(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['purchaseReservedInstanceOffering']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-01-01'].es.purchaseReservedInstanceOffering.$post(args, options),
  )
}

export async function put20150101EsCcsInboundConnectionConnectionIdReject(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['ccs']['inboundConnection'][':ConnectionId']['reject']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-01-01'].es.ccs.inboundConnection[':ConnectionId'].reject.$put(args, options),
  )
}

export async function post20150101TagsRemoval(
  args: InferRequestType<(typeof client)['2015-01-01']['tags-removal']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2015-01-01']['tags-removal'].$post(args, options))
}

export async function post20150101EsDomainDomainNameRevokeVpcEndpointAccess(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['domain'][':DomainName']['revokeVpcEndpointAccess']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-01-01'].es.domain[':DomainName'].revokeVpcEndpointAccess.$post(args, options),
  )
}

export async function post20150101EsServiceSoftwareUpdateStart(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['serviceSoftwareUpdate']['start']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['2015-01-01'].es.serviceSoftwareUpdate.start.$post(args, options),
  )
}

export async function post20150101PackagesUpdate(
  args: InferRequestType<(typeof client)['2015-01-01']['packages']['update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2015-01-01'].packages.update.$post(args, options))
}

export async function post20150101EsVpcEndpointsUpdate(
  args: InferRequestType<(typeof client)['2015-01-01']['es']['vpcEndpoints']['update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2015-01-01'].es.vpcEndpoints.update.$post(args, options))
}

export async function post20150101EsUpgradeDomain(
  args: InferRequestType<(typeof client)['2015-01-01']['es']['upgradeDomain']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2015-01-01'].es.upgradeDomain.$post(args, options))
}
