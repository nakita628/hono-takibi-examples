import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function get_2015_01_01Key() {
  return ['2015-01-01'] as const
}

export function getPut20150101EsCcsInboundConnectionConnectionIdAcceptKey() {
  return ['2015-01-01', '/2015-01-01/es/ccs/inboundConnection/:ConnectionId/accept', 'PUT'] as const
}

export function usePut20150101EsCcsInboundConnectionConnectionIdAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2015-01-01']['es']['ccs']['inboundConnection'][':ConnectionId']['accept']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2015-01-01']['es']['ccs']['inboundConnection'][':ConnectionId']['accept']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20150101EsCcsInboundConnectionConnectionIdAcceptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2015-01-01']['es']['ccs']['inboundConnection'][':ConnectionId']['accept']['$put']
          >
        },
      ) =>
        parseResponse(
          client['2015-01-01'].es.ccs.inboundConnection[':ConnectionId'].accept.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20150101TagsKey() {
  return ['2015-01-01', '/2015-01-01/tags', 'POST'] as const
}

export function usePost20150101Tags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2015-01-01']['tags']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2015-01-01']['tags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20150101TagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2015-01-01']['tags']['$post']> },
      ) => parseResponse(client['2015-01-01'].tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost20150101PackagesAssociatePackageIDDomainNameKey() {
  return ['2015-01-01', '/2015-01-01/packages/associate/:PackageID/:DomainName', 'POST'] as const
}

export function usePost20150101PackagesAssociatePackageIDDomainName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2015-01-01']['packages']['associate'][':PackageID'][':DomainName']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2015-01-01']['packages']['associate'][':PackageID'][':DomainName']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20150101PackagesAssociatePackageIDDomainNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2015-01-01']['packages']['associate'][':PackageID'][':DomainName']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2015-01-01'].packages.associate[':PackageID'][':DomainName'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20150101EsDomainDomainNameAuthorizeVpcEndpointAccessKey() {
  return [
    '2015-01-01',
    '/2015-01-01/es/domain/:DomainName/authorizeVpcEndpointAccess',
    'POST',
  ] as const
}

export function usePost20150101EsDomainDomainNameAuthorizeVpcEndpointAccess<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2015-01-01']['es']['domain'][':DomainName']['authorizeVpcEndpointAccess']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2015-01-01']['es']['domain'][':DomainName']['authorizeVpcEndpointAccess']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20150101EsDomainDomainNameAuthorizeVpcEndpointAccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2015-01-01']['es']['domain'][':DomainName']['authorizeVpcEndpointAccess']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2015-01-01'].es.domain[':DomainName'].authorizeVpcEndpointAccess.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20150101EsServiceSoftwareUpdateCancelKey() {
  return ['2015-01-01', '/2015-01-01/es/serviceSoftwareUpdate/cancel', 'POST'] as const
}

export function usePost20150101EsServiceSoftwareUpdateCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2015-01-01']['es']['serviceSoftwareUpdate']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2015-01-01']['es']['serviceSoftwareUpdate']['cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20150101EsServiceSoftwareUpdateCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2015-01-01']['es']['serviceSoftwareUpdate']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2015-01-01'].es.serviceSoftwareUpdate.cancel.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20150101EsDomainKey() {
  return ['2015-01-01', '/2015-01-01/es/domain', 'POST'] as const
}

export function usePost20150101EsDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2015-01-01']['es']['domain']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2015-01-01']['es']['domain']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20150101EsDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2015-01-01']['es']['domain']['$post']> },
      ) => parseResponse(client['2015-01-01'].es.domain.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost20150101EsCcsOutboundConnectionKey() {
  return ['2015-01-01', '/2015-01-01/es/ccs/outboundConnection', 'POST'] as const
}

export function usePost20150101EsCcsOutboundConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2015-01-01']['es']['ccs']['outboundConnection']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2015-01-01']['es']['ccs']['outboundConnection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20150101EsCcsOutboundConnectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2015-01-01']['es']['ccs']['outboundConnection']['$post']
          >
        },
      ) => parseResponse(client['2015-01-01'].es.ccs.outboundConnection.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost20150101PackagesKey() {
  return ['2015-01-01', '/2015-01-01/packages', 'POST'] as const
}

export function usePost20150101Packages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2015-01-01']['packages']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2015-01-01']['packages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20150101PackagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2015-01-01']['packages']['$post']> },
      ) => parseResponse(client['2015-01-01'].packages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20150101EsVpcEndpointsKey(
  args: InferRequestType<(typeof client)['2015-01-01']['es']['vpcEndpoints']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-01-01', '/2015-01-01/es/vpcEndpoints', keyArgs] as const
}

export function useGet20150101EsVpcEndpoints<TError = unknown>(
  args: InferRequestType<(typeof client)['2015-01-01']['es']['vpcEndpoints']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-01-01']['es']['vpcEndpoints']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150101EsVpcEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-01-01']['es']['vpcEndpoints']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2015-01-01'].es.vpcEndpoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20150101EsVpcEndpoints<TError = unknown>(
  args: InferRequestType<(typeof client)['2015-01-01']['es']['vpcEndpoints']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-01-01']['es']['vpcEndpoints']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150101EsVpcEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-01-01']['es']['vpcEndpoints']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2015-01-01'].es.vpcEndpoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20150101EsVpcEndpointsKey() {
  return ['2015-01-01', '/2015-01-01/es/vpcEndpoints', 'POST'] as const
}

export function usePost20150101EsVpcEndpoints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2015-01-01']['es']['vpcEndpoints']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2015-01-01']['es']['vpcEndpoints']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20150101EsVpcEndpointsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2015-01-01']['es']['vpcEndpoints']['$post']> },
      ) => parseResponse(client['2015-01-01'].es.vpcEndpoints.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20150101EsDomainDomainNameKey(
  args: InferRequestType<(typeof client)['2015-01-01']['es']['domain'][':DomainName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-01-01', '/2015-01-01/es/domain/:DomainName', keyArgs] as const
}

export function useGet20150101EsDomainDomainName<TError = unknown>(
  args: InferRequestType<(typeof client)['2015-01-01']['es']['domain'][':DomainName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2015-01-01']['es']['domain'][':DomainName']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150101EsDomainDomainNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2015-01-01']['es']['domain'][':DomainName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2015-01-01'].es.domain[':DomainName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20150101EsDomainDomainName<TError = unknown>(
  args: InferRequestType<(typeof client)['2015-01-01']['es']['domain'][':DomainName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2015-01-01']['es']['domain'][':DomainName']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150101EsDomainDomainNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2015-01-01']['es']['domain'][':DomainName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2015-01-01'].es.domain[':DomainName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDelete20150101EsDomainDomainNameKey() {
  return ['2015-01-01', '/2015-01-01/es/domain/:DomainName', 'DELETE'] as const
}

export function useDelete20150101EsDomainDomainName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2015-01-01']['es']['domain'][':DomainName']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2015-01-01']['es']['domain'][':DomainName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20150101EsDomainDomainNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2015-01-01']['es']['domain'][':DomainName']['$delete']
          >
        },
      ) => parseResponse(client['2015-01-01'].es.domain[':DomainName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete20150101EsRoleKey() {
  return ['2015-01-01', '/2015-01-01/es/role', 'DELETE'] as const
}

export function useDelete20150101EsRole<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2015-01-01']['es']['role']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2015-01-01']['es']['role']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20150101EsRoleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2015-01-01']['es']['role']['$delete']> },
      ) => parseResponse(client['2015-01-01'].es.role.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete20150101EsCcsInboundConnectionConnectionIdKey() {
  return ['2015-01-01', '/2015-01-01/es/ccs/inboundConnection/:ConnectionId', 'DELETE'] as const
}

export function useDelete20150101EsCcsInboundConnectionConnectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2015-01-01']['es']['ccs']['inboundConnection'][':ConnectionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2015-01-01']['es']['ccs']['inboundConnection'][':ConnectionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20150101EsCcsInboundConnectionConnectionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2015-01-01']['es']['ccs']['inboundConnection'][':ConnectionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2015-01-01'].es.ccs.inboundConnection[':ConnectionId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20150101EsCcsOutboundConnectionConnectionIdKey() {
  return ['2015-01-01', '/2015-01-01/es/ccs/outboundConnection/:ConnectionId', 'DELETE'] as const
}

export function useDelete20150101EsCcsOutboundConnectionConnectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2015-01-01']['es']['ccs']['outboundConnection'][':ConnectionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2015-01-01']['es']['ccs']['outboundConnection'][':ConnectionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20150101EsCcsOutboundConnectionConnectionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2015-01-01']['es']['ccs']['outboundConnection'][':ConnectionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2015-01-01'].es.ccs.outboundConnection[':ConnectionId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20150101PackagesPackageIDKey() {
  return ['2015-01-01', '/2015-01-01/packages/:PackageID', 'DELETE'] as const
}

export function useDelete20150101PackagesPackageID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2015-01-01']['packages'][':PackageID']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2015-01-01']['packages'][':PackageID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20150101PackagesPackageIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2015-01-01']['packages'][':PackageID']['$delete']>
        },
      ) => parseResponse(client['2015-01-01'].packages[':PackageID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete20150101EsVpcEndpointsVpcEndpointIdKey() {
  return ['2015-01-01', '/2015-01-01/es/vpcEndpoints/:VpcEndpointId', 'DELETE'] as const
}

export function useDelete20150101EsVpcEndpointsVpcEndpointId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2015-01-01']['es']['vpcEndpoints'][':VpcEndpointId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2015-01-01']['es']['vpcEndpoints'][':VpcEndpointId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20150101EsVpcEndpointsVpcEndpointIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2015-01-01']['es']['vpcEndpoints'][':VpcEndpointId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2015-01-01'].es.vpcEndpoints[':VpcEndpointId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20150101EsDomainDomainNameAutoTunesKey(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['domain'][':DomainName']['autoTunes']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-01-01', '/2015-01-01/es/domain/:DomainName/autoTunes', keyArgs] as const
}

export function useGet20150101EsDomainDomainNameAutoTunes<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['domain'][':DomainName']['autoTunes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-01-01']['es']['domain'][':DomainName']['autoTunes']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150101EsDomainDomainNameAutoTunesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-01-01']['es']['domain'][':DomainName']['autoTunes']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2015-01-01'].es.domain[':DomainName'].autoTunes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20150101EsDomainDomainNameAutoTunes<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['domain'][':DomainName']['autoTunes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-01-01']['es']['domain'][':DomainName']['autoTunes']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150101EsDomainDomainNameAutoTunesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-01-01']['es']['domain'][':DomainName']['autoTunes']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2015-01-01'].es.domain[':DomainName'].autoTunes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20150101EsDomainDomainNameProgressKey(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['domain'][':DomainName']['progress']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-01-01', '/2015-01-01/es/domain/:DomainName/progress', keyArgs] as const
}

export function useGet20150101EsDomainDomainNameProgress<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['domain'][':DomainName']['progress']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-01-01']['es']['domain'][':DomainName']['progress']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150101EsDomainDomainNameProgressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-01-01']['es']['domain'][':DomainName']['progress']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2015-01-01'].es.domain[':DomainName'].progress.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20150101EsDomainDomainNameProgress<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['domain'][':DomainName']['progress']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-01-01']['es']['domain'][':DomainName']['progress']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150101EsDomainDomainNameProgressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-01-01']['es']['domain'][':DomainName']['progress']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2015-01-01'].es.domain[':DomainName'].progress.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20150101EsDomainDomainNameConfigKey(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['domain'][':DomainName']['config']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-01-01', '/2015-01-01/es/domain/:DomainName/config', keyArgs] as const
}

export function useGet20150101EsDomainDomainNameConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['domain'][':DomainName']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-01-01']['es']['domain'][':DomainName']['config']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150101EsDomainDomainNameConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-01-01']['es']['domain'][':DomainName']['config']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2015-01-01'].es.domain[':DomainName'].config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20150101EsDomainDomainNameConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['domain'][':DomainName']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-01-01']['es']['domain'][':DomainName']['config']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150101EsDomainDomainNameConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-01-01']['es']['domain'][':DomainName']['config']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2015-01-01'].es.domain[':DomainName'].config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20150101EsDomainDomainNameConfigKey() {
  return ['2015-01-01', '/2015-01-01/es/domain/:DomainName/config', 'POST'] as const
}

export function usePost20150101EsDomainDomainNameConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2015-01-01']['es']['domain'][':DomainName']['config']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2015-01-01']['es']['domain'][':DomainName']['config']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20150101EsDomainDomainNameConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2015-01-01']['es']['domain'][':DomainName']['config']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2015-01-01'].es.domain[':DomainName'].config.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20150101EsDomainInfoKey() {
  return ['2015-01-01', '/2015-01-01/es/domain-info', 'POST'] as const
}

export function usePost20150101EsDomainInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2015-01-01']['es']['domain-info']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2015-01-01']['es']['domain-info']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20150101EsDomainInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2015-01-01']['es']['domain-info']['$post']> },
      ) => parseResponse(client['2015-01-01'].es['domain-info'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20150101EsInstanceTypeLimitsElasticsearchVersionInstanceTypeKey(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['instanceTypeLimits'][':ElasticsearchVersion'][':InstanceType']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '2015-01-01',
    '/2015-01-01/es/instanceTypeLimits/:ElasticsearchVersion/:InstanceType',
    keyArgs,
  ] as const
}

export function useGet20150101EsInstanceTypeLimitsElasticsearchVersionInstanceType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['instanceTypeLimits'][':ElasticsearchVersion'][':InstanceType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-01-01']['es']['instanceTypeLimits'][':ElasticsearchVersion'][':InstanceType']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150101EsInstanceTypeLimitsElasticsearchVersionInstanceTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-01-01']['es']['instanceTypeLimits'][':ElasticsearchVersion'][':InstanceType']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2015-01-01'].es.instanceTypeLimits[':ElasticsearchVersion'][':InstanceType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20150101EsInstanceTypeLimitsElasticsearchVersionInstanceType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['instanceTypeLimits'][':ElasticsearchVersion'][':InstanceType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-01-01']['es']['instanceTypeLimits'][':ElasticsearchVersion'][':InstanceType']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150101EsInstanceTypeLimitsElasticsearchVersionInstanceTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-01-01']['es']['instanceTypeLimits'][':ElasticsearchVersion'][':InstanceType']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2015-01-01'].es.instanceTypeLimits[':ElasticsearchVersion'][':InstanceType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20150101EsCcsInboundConnectionSearchKey() {
  return ['2015-01-01', '/2015-01-01/es/ccs/inboundConnection/search', 'POST'] as const
}

export function usePost20150101EsCcsInboundConnectionSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2015-01-01']['es']['ccs']['inboundConnection']['search']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2015-01-01']['es']['ccs']['inboundConnection']['search']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20150101EsCcsInboundConnectionSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2015-01-01']['es']['ccs']['inboundConnection']['search']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2015-01-01'].es.ccs.inboundConnection.search.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20150101EsCcsOutboundConnectionSearchKey() {
  return ['2015-01-01', '/2015-01-01/es/ccs/outboundConnection/search', 'POST'] as const
}

export function usePost20150101EsCcsOutboundConnectionSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2015-01-01']['es']['ccs']['outboundConnection']['search']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2015-01-01']['es']['ccs']['outboundConnection']['search']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20150101EsCcsOutboundConnectionSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2015-01-01']['es']['ccs']['outboundConnection']['search']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2015-01-01'].es.ccs.outboundConnection.search.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20150101PackagesDescribeKey() {
  return ['2015-01-01', '/2015-01-01/packages/describe', 'POST'] as const
}

export function usePost20150101PackagesDescribe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2015-01-01']['packages']['describe']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2015-01-01']['packages']['describe']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20150101PackagesDescribeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2015-01-01']['packages']['describe']['$post']>
        },
      ) => parseResponse(client['2015-01-01'].packages.describe.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20150101EsReservedInstanceOfferingsKey(
  args: InferRequestType<(typeof client)['2015-01-01']['es']['reservedInstanceOfferings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-01-01', '/2015-01-01/es/reservedInstanceOfferings', keyArgs] as const
}

export function useGet20150101EsReservedInstanceOfferings<TError = unknown>(
  args: InferRequestType<(typeof client)['2015-01-01']['es']['reservedInstanceOfferings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2015-01-01']['es']['reservedInstanceOfferings']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150101EsReservedInstanceOfferingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2015-01-01']['es']['reservedInstanceOfferings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2015-01-01'].es.reservedInstanceOfferings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20150101EsReservedInstanceOfferings<TError = unknown>(
  args: InferRequestType<(typeof client)['2015-01-01']['es']['reservedInstanceOfferings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2015-01-01']['es']['reservedInstanceOfferings']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150101EsReservedInstanceOfferingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2015-01-01']['es']['reservedInstanceOfferings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2015-01-01'].es.reservedInstanceOfferings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet20150101EsReservedInstancesKey(
  args: InferRequestType<(typeof client)['2015-01-01']['es']['reservedInstances']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-01-01', '/2015-01-01/es/reservedInstances', keyArgs] as const
}

export function useGet20150101EsReservedInstances<TError = unknown>(
  args: InferRequestType<(typeof client)['2015-01-01']['es']['reservedInstances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-01-01']['es']['reservedInstances']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150101EsReservedInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-01-01']['es']['reservedInstances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2015-01-01'].es.reservedInstances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20150101EsReservedInstances<TError = unknown>(
  args: InferRequestType<(typeof client)['2015-01-01']['es']['reservedInstances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-01-01']['es']['reservedInstances']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150101EsReservedInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-01-01']['es']['reservedInstances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2015-01-01'].es.reservedInstances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20150101EsVpcEndpointsDescribeKey() {
  return ['2015-01-01', '/2015-01-01/es/vpcEndpoints/describe', 'POST'] as const
}

export function usePost20150101EsVpcEndpointsDescribe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2015-01-01']['es']['vpcEndpoints']['describe']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2015-01-01']['es']['vpcEndpoints']['describe']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20150101EsVpcEndpointsDescribeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2015-01-01']['es']['vpcEndpoints']['describe']['$post']
          >
        },
      ) => parseResponse(client['2015-01-01'].es.vpcEndpoints.describe.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost20150101PackagesDissociatePackageIDDomainNameKey() {
  return ['2015-01-01', '/2015-01-01/packages/dissociate/:PackageID/:DomainName', 'POST'] as const
}

export function usePost20150101PackagesDissociatePackageIDDomainName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2015-01-01']['packages']['dissociate'][':PackageID'][':DomainName']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2015-01-01']['packages']['dissociate'][':PackageID'][':DomainName']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20150101PackagesDissociatePackageIDDomainNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2015-01-01']['packages']['dissociate'][':PackageID'][':DomainName']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2015-01-01'].packages.dissociate[':PackageID'][':DomainName'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20150101EsCompatibleVersionsKey(
  args: InferRequestType<(typeof client)['2015-01-01']['es']['compatibleVersions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-01-01', '/2015-01-01/es/compatibleVersions', keyArgs] as const
}

export function useGet20150101EsCompatibleVersions<TError = unknown>(
  args: InferRequestType<(typeof client)['2015-01-01']['es']['compatibleVersions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-01-01']['es']['compatibleVersions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150101EsCompatibleVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-01-01']['es']['compatibleVersions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2015-01-01'].es.compatibleVersions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20150101EsCompatibleVersions<TError = unknown>(
  args: InferRequestType<(typeof client)['2015-01-01']['es']['compatibleVersions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-01-01']['es']['compatibleVersions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150101EsCompatibleVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-01-01']['es']['compatibleVersions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2015-01-01'].es.compatibleVersions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet20150101PackagesPackageIDHistoryKey(
  args: InferRequestType<
    (typeof client)['2015-01-01']['packages'][':PackageID']['history']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-01-01', '/2015-01-01/packages/:PackageID/history', keyArgs] as const
}

export function useGet20150101PackagesPackageIDHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2015-01-01']['packages'][':PackageID']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2015-01-01']['packages'][':PackageID']['history']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150101PackagesPackageIDHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2015-01-01']['packages'][':PackageID']['history']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2015-01-01'].packages[':PackageID'].history.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20150101PackagesPackageIDHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2015-01-01']['packages'][':PackageID']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2015-01-01']['packages'][':PackageID']['history']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150101PackagesPackageIDHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2015-01-01']['packages'][':PackageID']['history']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2015-01-01'].packages[':PackageID'].history.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20150101EsUpgradeDomainDomainNameHistoryKey(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['upgradeDomain'][':DomainName']['history']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-01-01', '/2015-01-01/es/upgradeDomain/:DomainName/history', keyArgs] as const
}

export function useGet20150101EsUpgradeDomainDomainNameHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['upgradeDomain'][':DomainName']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-01-01']['es']['upgradeDomain'][':DomainName']['history']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150101EsUpgradeDomainDomainNameHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-01-01']['es']['upgradeDomain'][':DomainName']['history']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2015-01-01'].es.upgradeDomain[':DomainName'].history.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20150101EsUpgradeDomainDomainNameHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['upgradeDomain'][':DomainName']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-01-01']['es']['upgradeDomain'][':DomainName']['history']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150101EsUpgradeDomainDomainNameHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-01-01']['es']['upgradeDomain'][':DomainName']['history']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2015-01-01'].es.upgradeDomain[':DomainName'].history.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20150101EsUpgradeDomainDomainNameStatusKey(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['upgradeDomain'][':DomainName']['status']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-01-01', '/2015-01-01/es/upgradeDomain/:DomainName/status', keyArgs] as const
}

export function useGet20150101EsUpgradeDomainDomainNameStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['upgradeDomain'][':DomainName']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-01-01']['es']['upgradeDomain'][':DomainName']['status']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150101EsUpgradeDomainDomainNameStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-01-01']['es']['upgradeDomain'][':DomainName']['status']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2015-01-01'].es.upgradeDomain[':DomainName'].status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20150101EsUpgradeDomainDomainNameStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['upgradeDomain'][':DomainName']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-01-01']['es']['upgradeDomain'][':DomainName']['status']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150101EsUpgradeDomainDomainNameStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-01-01']['es']['upgradeDomain'][':DomainName']['status']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2015-01-01'].es.upgradeDomain[':DomainName'].status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20150101DomainKey(
  args: InferRequestType<(typeof client)['2015-01-01']['domain']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-01-01', '/2015-01-01/domain', keyArgs] as const
}

export function useGet20150101Domain<TError = unknown>(
  args: InferRequestType<(typeof client)['2015-01-01']['domain']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2015-01-01']['domain']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet20150101DomainKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2015-01-01']['domain']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2015-01-01'].domain.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20150101Domain<TError = unknown>(
  args: InferRequestType<(typeof client)['2015-01-01']['domain']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2015-01-01']['domain']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet20150101DomainKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2015-01-01']['domain']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2015-01-01'].domain.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet20150101PackagesPackageIDDomainsKey(
  args: InferRequestType<
    (typeof client)['2015-01-01']['packages'][':PackageID']['domains']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-01-01', '/2015-01-01/packages/:PackageID/domains', keyArgs] as const
}

export function useGet20150101PackagesPackageIDDomains<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2015-01-01']['packages'][':PackageID']['domains']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2015-01-01']['packages'][':PackageID']['domains']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150101PackagesPackageIDDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2015-01-01']['packages'][':PackageID']['domains']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2015-01-01'].packages[':PackageID'].domains.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20150101PackagesPackageIDDomains<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2015-01-01']['packages'][':PackageID']['domains']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2015-01-01']['packages'][':PackageID']['domains']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150101PackagesPackageIDDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2015-01-01']['packages'][':PackageID']['domains']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2015-01-01'].packages[':PackageID'].domains.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20150101EsInstanceTypesElasticsearchVersionKey(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['instanceTypes'][':ElasticsearchVersion']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-01-01', '/2015-01-01/es/instanceTypes/:ElasticsearchVersion', keyArgs] as const
}

export function useGet20150101EsInstanceTypesElasticsearchVersion<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['instanceTypes'][':ElasticsearchVersion']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-01-01']['es']['instanceTypes'][':ElasticsearchVersion']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150101EsInstanceTypesElasticsearchVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-01-01']['es']['instanceTypes'][':ElasticsearchVersion']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2015-01-01'].es.instanceTypes[':ElasticsearchVersion'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20150101EsInstanceTypesElasticsearchVersion<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['instanceTypes'][':ElasticsearchVersion']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-01-01']['es']['instanceTypes'][':ElasticsearchVersion']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150101EsInstanceTypesElasticsearchVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-01-01']['es']['instanceTypes'][':ElasticsearchVersion']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2015-01-01'].es.instanceTypes[':ElasticsearchVersion'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20150101EsVersionsKey(
  args: InferRequestType<(typeof client)['2015-01-01']['es']['versions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-01-01', '/2015-01-01/es/versions', keyArgs] as const
}

export function useGet20150101EsVersions<TError = unknown>(
  args: InferRequestType<(typeof client)['2015-01-01']['es']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-01-01']['es']['versions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150101EsVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-01-01']['es']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2015-01-01'].es.versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20150101EsVersions<TError = unknown>(
  args: InferRequestType<(typeof client)['2015-01-01']['es']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-01-01']['es']['versions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150101EsVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-01-01']['es']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2015-01-01'].es.versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet20150101DomainDomainNamePackagesKey(
  args: InferRequestType<
    (typeof client)['2015-01-01']['domain'][':DomainName']['packages']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-01-01', '/2015-01-01/domain/:DomainName/packages', keyArgs] as const
}

export function useGet20150101DomainDomainNamePackages<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2015-01-01']['domain'][':DomainName']['packages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2015-01-01']['domain'][':DomainName']['packages']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150101DomainDomainNamePackagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2015-01-01']['domain'][':DomainName']['packages']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2015-01-01'].domain[':DomainName'].packages.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20150101DomainDomainNamePackages<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2015-01-01']['domain'][':DomainName']['packages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2015-01-01']['domain'][':DomainName']['packages']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150101DomainDomainNamePackagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2015-01-01']['domain'][':DomainName']['packages']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2015-01-01'].domain[':DomainName'].packages.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20150101TagsArnKey(
  args: InferRequestType<(typeof client)['2015-01-01']['tags']['#arn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-01-01', '/2015-01-01/tags/#arn', keyArgs] as const
}

export function useGet20150101TagsArn<TError = unknown>(
  args: InferRequestType<(typeof client)['2015-01-01']['tags']['#arn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-01-01']['tags']['#arn']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150101TagsArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-01-01']['tags']['#arn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2015-01-01'].tags['#arn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20150101TagsArn<TError = unknown>(
  args: InferRequestType<(typeof client)['2015-01-01']['tags']['#arn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-01-01']['tags']['#arn']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150101TagsArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2015-01-01']['tags']['#arn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2015-01-01'].tags['#arn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet20150101EsDomainDomainNameListVpcEndpointAccessKey(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['domain'][':DomainName']['listVpcEndpointAccess']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-01-01', '/2015-01-01/es/domain/:DomainName/listVpcEndpointAccess', keyArgs] as const
}

export function useGet20150101EsDomainDomainNameListVpcEndpointAccess<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['domain'][':DomainName']['listVpcEndpointAccess']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-01-01']['es']['domain'][':DomainName']['listVpcEndpointAccess']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150101EsDomainDomainNameListVpcEndpointAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-01-01']['es']['domain'][':DomainName']['listVpcEndpointAccess']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2015-01-01'].es.domain[':DomainName'].listVpcEndpointAccess.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20150101EsDomainDomainNameListVpcEndpointAccess<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['domain'][':DomainName']['listVpcEndpointAccess']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-01-01']['es']['domain'][':DomainName']['listVpcEndpointAccess']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150101EsDomainDomainNameListVpcEndpointAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-01-01']['es']['domain'][':DomainName']['listVpcEndpointAccess']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2015-01-01'].es.domain[':DomainName'].listVpcEndpointAccess.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20150101EsDomainDomainNameVpcEndpointsKey(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['domain'][':DomainName']['vpcEndpoints']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2015-01-01', '/2015-01-01/es/domain/:DomainName/vpcEndpoints', keyArgs] as const
}

export function useGet20150101EsDomainDomainNameVpcEndpoints<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['domain'][':DomainName']['vpcEndpoints']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-01-01']['es']['domain'][':DomainName']['vpcEndpoints']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150101EsDomainDomainNameVpcEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-01-01']['es']['domain'][':DomainName']['vpcEndpoints']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2015-01-01'].es.domain[':DomainName'].vpcEndpoints.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20150101EsDomainDomainNameVpcEndpoints<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2015-01-01']['es']['domain'][':DomainName']['vpcEndpoints']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-01-01']['es']['domain'][':DomainName']['vpcEndpoints']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20150101EsDomainDomainNameVpcEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2015-01-01']['es']['domain'][':DomainName']['vpcEndpoints']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2015-01-01'].es.domain[':DomainName'].vpcEndpoints.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20150101EsPurchaseReservedInstanceOfferingKey() {
  return ['2015-01-01', '/2015-01-01/es/purchaseReservedInstanceOffering', 'POST'] as const
}

export function usePost20150101EsPurchaseReservedInstanceOffering<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2015-01-01']['es']['purchaseReservedInstanceOffering']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2015-01-01']['es']['purchaseReservedInstanceOffering']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20150101EsPurchaseReservedInstanceOfferingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2015-01-01']['es']['purchaseReservedInstanceOffering']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2015-01-01'].es.purchaseReservedInstanceOffering.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPut20150101EsCcsInboundConnectionConnectionIdRejectKey() {
  return ['2015-01-01', '/2015-01-01/es/ccs/inboundConnection/:ConnectionId/reject', 'PUT'] as const
}

export function usePut20150101EsCcsInboundConnectionConnectionIdReject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2015-01-01']['es']['ccs']['inboundConnection'][':ConnectionId']['reject']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2015-01-01']['es']['ccs']['inboundConnection'][':ConnectionId']['reject']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20150101EsCcsInboundConnectionConnectionIdRejectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2015-01-01']['es']['ccs']['inboundConnection'][':ConnectionId']['reject']['$put']
          >
        },
      ) =>
        parseResponse(
          client['2015-01-01'].es.ccs.inboundConnection[':ConnectionId'].reject.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20150101TagsRemovalKey() {
  return ['2015-01-01', '/2015-01-01/tags-removal', 'POST'] as const
}

export function usePost20150101TagsRemoval<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2015-01-01']['tags-removal']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2015-01-01']['tags-removal']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20150101TagsRemovalKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2015-01-01']['tags-removal']['$post']> },
      ) => parseResponse(client['2015-01-01']['tags-removal'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost20150101EsDomainDomainNameRevokeVpcEndpointAccessKey() {
  return [
    '2015-01-01',
    '/2015-01-01/es/domain/:DomainName/revokeVpcEndpointAccess',
    'POST',
  ] as const
}

export function usePost20150101EsDomainDomainNameRevokeVpcEndpointAccess<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2015-01-01']['es']['domain'][':DomainName']['revokeVpcEndpointAccess']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2015-01-01']['es']['domain'][':DomainName']['revokeVpcEndpointAccess']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20150101EsDomainDomainNameRevokeVpcEndpointAccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2015-01-01']['es']['domain'][':DomainName']['revokeVpcEndpointAccess']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2015-01-01'].es.domain[':DomainName'].revokeVpcEndpointAccess.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20150101EsServiceSoftwareUpdateStartKey() {
  return ['2015-01-01', '/2015-01-01/es/serviceSoftwareUpdate/start', 'POST'] as const
}

export function usePost20150101EsServiceSoftwareUpdateStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2015-01-01']['es']['serviceSoftwareUpdate']['start']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2015-01-01']['es']['serviceSoftwareUpdate']['start']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20150101EsServiceSoftwareUpdateStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2015-01-01']['es']['serviceSoftwareUpdate']['start']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2015-01-01'].es.serviceSoftwareUpdate.start.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20150101PackagesUpdateKey() {
  return ['2015-01-01', '/2015-01-01/packages/update', 'POST'] as const
}

export function usePost20150101PackagesUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2015-01-01']['packages']['update']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2015-01-01']['packages']['update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20150101PackagesUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2015-01-01']['packages']['update']['$post']> },
      ) => parseResponse(client['2015-01-01'].packages.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost20150101EsVpcEndpointsUpdateKey() {
  return ['2015-01-01', '/2015-01-01/es/vpcEndpoints/update', 'POST'] as const
}

export function usePost20150101EsVpcEndpointsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2015-01-01']['es']['vpcEndpoints']['update']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2015-01-01']['es']['vpcEndpoints']['update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20150101EsVpcEndpointsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['2015-01-01']['es']['vpcEndpoints']['update']['$post']
          >
        },
      ) => parseResponse(client['2015-01-01'].es.vpcEndpoints.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost20150101EsUpgradeDomainKey() {
  return ['2015-01-01', '/2015-01-01/es/upgradeDomain', 'POST'] as const
}

export function usePost20150101EsUpgradeDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2015-01-01']['es']['upgradeDomain']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2015-01-01']['es']['upgradeDomain']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20150101EsUpgradeDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2015-01-01']['es']['upgradeDomain']['$post']> },
      ) => parseResponse(client['2015-01-01'].es.upgradeDomain.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
