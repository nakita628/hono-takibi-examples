import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function get_2015_01_01Key() {
  return ['2015-01-01'] as const
}

export function getPut20150101EsCcsInboundConnectionConnectionIdAcceptMutationKey() {
  return ['2015-01-01', '/2015-01-01/es/ccs/inboundConnection/:ConnectionId/accept', 'PUT'] as const
}

export function getPut20150101EsCcsInboundConnectionConnectionIdAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2015-01-01']['es']['ccs']['inboundConnection'][':ConnectionId']['accept']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPut20150101EsCcsInboundConnectionConnectionIdAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-01-01']['es']['ccs']['inboundConnection'][':ConnectionId']['accept']['$put']
      >,
    ) {
      return parseResponse(
        client['2015-01-01'].es.ccs.inboundConnection[':ConnectionId'].accept.$put(args, options),
      )
    },
  })
}

export function usePut20150101EsCcsInboundConnectionConnectionIdAccept<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['2015-01-01']['es']['ccs']['inboundConnection'][':ConnectionId']['accept']['$put']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPut20150101EsCcsInboundConnectionConnectionIdAcceptMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPost20150101TagsMutationKey() {
  return ['2015-01-01', '/2015-01-01/tags', 'POST'] as const
}

export function getPost20150101TagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2015-01-01']['tags']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['2015-01-01']['tags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20150101TagsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2015-01-01']['tags']['$post']>) {
      return parseResponse(client['2015-01-01'].tags.$post(args, options))
    },
  })
}

export function usePost20150101Tags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2015-01-01']['tags']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2015-01-01']['tags']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20150101TagsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPost20150101PackagesAssociatePackageIDDomainNameMutationKey() {
  return ['2015-01-01', '/2015-01-01/packages/associate/:PackageID/:DomainName', 'POST'] as const
}

export function getPost20150101PackagesAssociatePackageIDDomainNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2015-01-01']['packages']['associate'][':PackageID'][':DomainName']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20150101PackagesAssociatePackageIDDomainNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-01-01']['packages']['associate'][':PackageID'][':DomainName']['$post']
      >,
    ) {
      return parseResponse(
        client['2015-01-01'].packages.associate[':PackageID'][':DomainName'].$post(args, options),
      )
    },
  })
}

export function usePost20150101PackagesAssociatePackageIDDomainName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['2015-01-01']['packages']['associate'][':PackageID'][':DomainName']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20150101PackagesAssociatePackageIDDomainNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPost20150101EsDomainDomainNameAuthorizeVpcEndpointAccessMutationKey() {
  return [
    '2015-01-01',
    '/2015-01-01/es/domain/:DomainName/authorizeVpcEndpointAccess',
    'POST',
  ] as const
}

export function getPost20150101EsDomainDomainNameAuthorizeVpcEndpointAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2015-01-01']['es']['domain'][':DomainName']['authorizeVpcEndpointAccess']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20150101EsDomainDomainNameAuthorizeVpcEndpointAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-01-01']['es']['domain'][':DomainName']['authorizeVpcEndpointAccess']['$post']
      >,
    ) {
      return parseResponse(
        client['2015-01-01'].es.domain[':DomainName'].authorizeVpcEndpointAccess.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePost20150101EsDomainDomainNameAuthorizeVpcEndpointAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['2015-01-01']['es']['domain'][':DomainName']['authorizeVpcEndpointAccess']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPost20150101EsDomainDomainNameAuthorizeVpcEndpointAccessMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPost20150101EsServiceSoftwareUpdateCancelMutationKey() {
  return ['2015-01-01', '/2015-01-01/es/serviceSoftwareUpdate/cancel', 'POST'] as const
}

export function getPost20150101EsServiceSoftwareUpdateCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2015-01-01']['es']['serviceSoftwareUpdate']['cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20150101EsServiceSoftwareUpdateCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-01-01']['es']['serviceSoftwareUpdate']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client['2015-01-01'].es.serviceSoftwareUpdate.cancel.$post(args, options),
      )
    },
  })
}

export function usePost20150101EsServiceSoftwareUpdateCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['2015-01-01']['es']['serviceSoftwareUpdate']['cancel']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20150101EsServiceSoftwareUpdateCancelMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPost20150101EsDomainMutationKey() {
  return ['2015-01-01', '/2015-01-01/es/domain', 'POST'] as const
}

export function getPost20150101EsDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2015-01-01']['es']['domain']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2015-01-01']['es']['domain']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20150101EsDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2015-01-01']['es']['domain']['$post']>,
    ) {
      return parseResponse(client['2015-01-01'].es.domain.$post(args, options))
    },
  })
}

export function usePost20150101EsDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2015-01-01']['es']['domain']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2015-01-01']['es']['domain']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20150101EsDomainMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPost20150101EsCcsOutboundConnectionMutationKey() {
  return ['2015-01-01', '/2015-01-01/es/ccs/outboundConnection', 'POST'] as const
}

export function getPost20150101EsCcsOutboundConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2015-01-01']['es']['ccs']['outboundConnection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20150101EsCcsOutboundConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-01-01']['es']['ccs']['outboundConnection']['$post']
      >,
    ) {
      return parseResponse(client['2015-01-01'].es.ccs.outboundConnection.$post(args, options))
    },
  })
}

export function usePost20150101EsCcsOutboundConnection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['2015-01-01']['es']['ccs']['outboundConnection']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2015-01-01']['es']['ccs']['outboundConnection']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20150101EsCcsOutboundConnectionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPost20150101PackagesMutationKey() {
  return ['2015-01-01', '/2015-01-01/packages', 'POST'] as const
}

export function getPost20150101PackagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2015-01-01']['packages']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2015-01-01']['packages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20150101PackagesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2015-01-01']['packages']['$post']>) {
      return parseResponse(client['2015-01-01'].packages.$post(args, options))
    },
  })
}

export function usePost20150101Packages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2015-01-01']['packages']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2015-01-01']['packages']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20150101PackagesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get20150101EsVpcEndpointsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-01-01']['es']['vpcEndpoints']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2015-01-01', '/2015-01-01/es/vpcEndpoints', keyArgs] as const
}

export function get20150101EsVpcEndpointsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-01-01']['es']['vpcEndpoints']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20150101EsVpcEndpointsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2015-01-01'].es.vpcEndpoints.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20150101EsVpcEndpoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2015-01-01']['es']['vpcEndpoints']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-01-01']['es']['vpcEndpoints']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2015-01-01']['es']['vpcEndpoints']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2015-01-01']['es']['vpcEndpoints']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20150101EsVpcEndpointsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2015-01-01']['es']['vpcEndpoints']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20150101EsVpcEndpointsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20150101EsVpcEndpointsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2015-01-01'].es.vpcEndpoints.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPost20150101EsVpcEndpointsMutationKey() {
  return ['2015-01-01', '/2015-01-01/es/vpcEndpoints', 'POST'] as const
}

export function getPost20150101EsVpcEndpointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2015-01-01']['es']['vpcEndpoints']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2015-01-01']['es']['vpcEndpoints']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20150101EsVpcEndpointsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2015-01-01']['es']['vpcEndpoints']['$post']>,
    ) {
      return parseResponse(client['2015-01-01'].es.vpcEndpoints.$post(args, options))
    },
  })
}

export function usePost20150101EsVpcEndpoints<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2015-01-01']['es']['vpcEndpoints']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2015-01-01']['es']['vpcEndpoints']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20150101EsVpcEndpointsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get20150101EsDomainDomainNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-01-01']['es']['domain'][':DomainName']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2015-01-01', '/2015-01-01/es/domain/:DomainName', keyArgs] as const
}

export function get20150101EsDomainDomainNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-01-01']['es']['domain'][':DomainName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20150101EsDomainDomainNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2015-01-01'].es.domain[':DomainName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20150101EsDomainDomainName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2015-01-01']['es']['domain'][':DomainName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-01-01']['es']['domain'][':DomainName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2015-01-01']['es']['domain'][':DomainName']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2015-01-01']['es']['domain'][':DomainName']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get20150101EsDomainDomainNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2015-01-01']['es']['domain'][':DomainName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20150101EsDomainDomainNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20150101EsDomainDomainNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2015-01-01'].es.domain[':DomainName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDelete20150101EsDomainDomainNameMutationKey() {
  return ['2015-01-01', '/2015-01-01/es/domain/:DomainName', 'DELETE'] as const
}

export function getDelete20150101EsDomainDomainNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2015-01-01']['es']['domain'][':DomainName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete20150101EsDomainDomainNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-01-01']['es']['domain'][':DomainName']['$delete']
      >,
    ) {
      return parseResponse(client['2015-01-01'].es.domain[':DomainName'].$delete(args, options))
    },
  })
}

export function useDelete20150101EsDomainDomainName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['2015-01-01']['es']['domain'][':DomainName']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2015-01-01']['es']['domain'][':DomainName']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete20150101EsDomainDomainNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDelete20150101EsRoleMutationKey() {
  return ['2015-01-01', '/2015-01-01/es/role', 'DELETE'] as const
}

export function getDelete20150101EsRoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2015-01-01']['es']['role']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2015-01-01']['es']['role']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete20150101EsRoleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2015-01-01']['es']['role']['$delete']>,
    ) {
      return parseResponse(client['2015-01-01'].es.role.$delete(args, options))
    },
  })
}

export function useDelete20150101EsRole<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2015-01-01']['es']['role']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2015-01-01']['es']['role']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete20150101EsRoleMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDelete20150101EsCcsInboundConnectionConnectionIdMutationKey() {
  return ['2015-01-01', '/2015-01-01/es/ccs/inboundConnection/:ConnectionId', 'DELETE'] as const
}

export function getDelete20150101EsCcsInboundConnectionConnectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2015-01-01']['es']['ccs']['inboundConnection'][':ConnectionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20150101EsCcsInboundConnectionConnectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-01-01']['es']['ccs']['inboundConnection'][':ConnectionId']['$delete']
      >,
    ) {
      return parseResponse(
        client['2015-01-01'].es.ccs.inboundConnection[':ConnectionId'].$delete(args, options),
      )
    },
  })
}

export function useDelete20150101EsCcsInboundConnectionConnectionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['2015-01-01']['es']['ccs']['inboundConnection'][':ConnectionId']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete20150101EsCcsInboundConnectionConnectionIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDelete20150101EsCcsOutboundConnectionConnectionIdMutationKey() {
  return ['2015-01-01', '/2015-01-01/es/ccs/outboundConnection/:ConnectionId', 'DELETE'] as const
}

export function getDelete20150101EsCcsOutboundConnectionConnectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2015-01-01']['es']['ccs']['outboundConnection'][':ConnectionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20150101EsCcsOutboundConnectionConnectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-01-01']['es']['ccs']['outboundConnection'][':ConnectionId']['$delete']
      >,
    ) {
      return parseResponse(
        client['2015-01-01'].es.ccs.outboundConnection[':ConnectionId'].$delete(args, options),
      )
    },
  })
}

export function useDelete20150101EsCcsOutboundConnectionConnectionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['2015-01-01']['es']['ccs']['outboundConnection'][':ConnectionId']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete20150101EsCcsOutboundConnectionConnectionIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDelete20150101PackagesPackageIDMutationKey() {
  return ['2015-01-01', '/2015-01-01/packages/:PackageID', 'DELETE'] as const
}

export function getDelete20150101PackagesPackageIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2015-01-01']['packages'][':PackageID']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2015-01-01']['packages'][':PackageID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete20150101PackagesPackageIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2015-01-01']['packages'][':PackageID']['$delete']>,
    ) {
      return parseResponse(client['2015-01-01'].packages[':PackageID'].$delete(args, options))
    },
  })
}

export function useDelete20150101PackagesPackageID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2015-01-01']['packages'][':PackageID']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2015-01-01']['packages'][':PackageID']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete20150101PackagesPackageIDMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDelete20150101EsVpcEndpointsVpcEndpointIdMutationKey() {
  return ['2015-01-01', '/2015-01-01/es/vpcEndpoints/:VpcEndpointId', 'DELETE'] as const
}

export function getDelete20150101EsVpcEndpointsVpcEndpointIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2015-01-01']['es']['vpcEndpoints'][':VpcEndpointId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20150101EsVpcEndpointsVpcEndpointIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-01-01']['es']['vpcEndpoints'][':VpcEndpointId']['$delete']
      >,
    ) {
      return parseResponse(
        client['2015-01-01'].es.vpcEndpoints[':VpcEndpointId'].$delete(args, options),
      )
    },
  })
}

export function useDelete20150101EsVpcEndpointsVpcEndpointId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['2015-01-01']['es']['vpcEndpoints'][':VpcEndpointId']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete20150101EsVpcEndpointsVpcEndpointIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get20150101EsDomainDomainNameAutoTunesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2015-01-01']['es']['domain'][':DomainName']['autoTunes']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2015-01-01', '/2015-01-01/es/domain/:DomainName/autoTunes', keyArgs] as const
}

export function get20150101EsDomainDomainNameAutoTunesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2015-01-01']['es']['domain'][':DomainName']['autoTunes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20150101EsDomainDomainNameAutoTunesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2015-01-01'].es.domain[':DomainName'].autoTunes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20150101EsDomainDomainNameAutoTunes<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2015-01-01']['es']['domain'][':DomainName']['autoTunes']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof get20150101EsDomainDomainNameAutoTunesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
    TError,
    TData,
    ReturnType<typeof get20150101EsDomainDomainNameAutoTunesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20150101EsDomainDomainNameAutoTunesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2015-01-01'].es.domain[':DomainName'].autoTunes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20150101EsDomainDomainNameProgressQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2015-01-01']['es']['domain'][':DomainName']['progress']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2015-01-01', '/2015-01-01/es/domain/:DomainName/progress', keyArgs] as const
}

export function get20150101EsDomainDomainNameProgressQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2015-01-01']['es']['domain'][':DomainName']['progress']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20150101EsDomainDomainNameProgressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2015-01-01'].es.domain[':DomainName'].progress.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20150101EsDomainDomainNameProgress<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2015-01-01']['es']['domain'][':DomainName']['progress']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof get20150101EsDomainDomainNameProgressQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
    TError,
    TData,
    ReturnType<typeof get20150101EsDomainDomainNameProgressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20150101EsDomainDomainNameProgressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2015-01-01'].es.domain[':DomainName'].progress.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20150101EsDomainDomainNameConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-01-01']['es']['domain'][':DomainName']['config']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2015-01-01', '/2015-01-01/es/domain/:DomainName/config', keyArgs] as const
}

export function get20150101EsDomainDomainNameConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-01-01']['es']['domain'][':DomainName']['config']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20150101EsDomainDomainNameConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2015-01-01'].es.domain[':DomainName'].config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20150101EsDomainDomainNameConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2015-01-01']['es']['domain'][':DomainName']['config']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-01-01']['es']['domain'][':DomainName']['config']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof get20150101EsDomainDomainNameConfigQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
    TError,
    TData,
    ReturnType<typeof get20150101EsDomainDomainNameConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20150101EsDomainDomainNameConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2015-01-01'].es.domain[':DomainName'].config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPost20150101EsDomainDomainNameConfigMutationKey() {
  return ['2015-01-01', '/2015-01-01/es/domain/:DomainName/config', 'POST'] as const
}

export function getPost20150101EsDomainDomainNameConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2015-01-01']['es']['domain'][':DomainName']['config']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20150101EsDomainDomainNameConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-01-01']['es']['domain'][':DomainName']['config']['$post']
      >,
    ) {
      return parseResponse(
        client['2015-01-01'].es.domain[':DomainName'].config.$post(args, options),
      )
    },
  })
}

export function usePost20150101EsDomainDomainNameConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['2015-01-01']['es']['domain'][':DomainName']['config']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20150101EsDomainDomainNameConfigMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPost20150101EsDomainInfoMutationKey() {
  return ['2015-01-01', '/2015-01-01/es/domain-info', 'POST'] as const
}

export function getPost20150101EsDomainInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2015-01-01']['es']['domain-info']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2015-01-01']['es']['domain-info']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20150101EsDomainInfoMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2015-01-01']['es']['domain-info']['$post']>,
    ) {
      return parseResponse(client['2015-01-01'].es['domain-info'].$post(args, options))
    },
  })
}

export function usePost20150101EsDomainInfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2015-01-01']['es']['domain-info']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2015-01-01']['es']['domain-info']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20150101EsDomainInfoMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get20150101EsInstanceTypeLimitsElasticsearchVersionInstanceTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2015-01-01']['es']['instanceTypeLimits'][':ElasticsearchVersion'][':InstanceType']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '2015-01-01',
    '/2015-01-01/es/instanceTypeLimits/:ElasticsearchVersion/:InstanceType',
    keyArgs,
  ] as const
}

export function get20150101EsInstanceTypeLimitsElasticsearchVersionInstanceTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2015-01-01']['es']['instanceTypeLimits'][':ElasticsearchVersion'][':InstanceType']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20150101EsInstanceTypeLimitsElasticsearchVersionInstanceTypeQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2015-01-01'].es.instanceTypeLimits[':ElasticsearchVersion'][':InstanceType'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function use20150101EsInstanceTypeLimitsElasticsearchVersionInstanceType<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2015-01-01']['es']['instanceTypeLimits'][':ElasticsearchVersion'][':InstanceType']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof get20150101EsInstanceTypeLimitsElasticsearchVersionInstanceTypeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
    TError,
    TData,
    ReturnType<typeof get20150101EsInstanceTypeLimitsElasticsearchVersionInstanceTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20150101EsInstanceTypeLimitsElasticsearchVersionInstanceTypeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2015-01-01'].es.instanceTypeLimits[':ElasticsearchVersion'][':InstanceType'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPost20150101EsCcsInboundConnectionSearchMutationKey() {
  return ['2015-01-01', '/2015-01-01/es/ccs/inboundConnection/search', 'POST'] as const
}

export function getPost20150101EsCcsInboundConnectionSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2015-01-01']['es']['ccs']['inboundConnection']['search']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20150101EsCcsInboundConnectionSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-01-01']['es']['ccs']['inboundConnection']['search']['$post']
      >,
    ) {
      return parseResponse(
        client['2015-01-01'].es.ccs.inboundConnection.search.$post(args, options),
      )
    },
  })
}

export function usePost20150101EsCcsInboundConnectionSearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['2015-01-01']['es']['ccs']['inboundConnection']['search']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20150101EsCcsInboundConnectionSearchMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPost20150101EsCcsOutboundConnectionSearchMutationKey() {
  return ['2015-01-01', '/2015-01-01/es/ccs/outboundConnection/search', 'POST'] as const
}

export function getPost20150101EsCcsOutboundConnectionSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2015-01-01']['es']['ccs']['outboundConnection']['search']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20150101EsCcsOutboundConnectionSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-01-01']['es']['ccs']['outboundConnection']['search']['$post']
      >,
    ) {
      return parseResponse(
        client['2015-01-01'].es.ccs.outboundConnection.search.$post(args, options),
      )
    },
  })
}

export function usePost20150101EsCcsOutboundConnectionSearch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['2015-01-01']['es']['ccs']['outboundConnection']['search']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20150101EsCcsOutboundConnectionSearchMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPost20150101PackagesDescribeMutationKey() {
  return ['2015-01-01', '/2015-01-01/packages/describe', 'POST'] as const
}

export function getPost20150101PackagesDescribeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2015-01-01']['packages']['describe']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2015-01-01']['packages']['describe']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20150101PackagesDescribeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2015-01-01']['packages']['describe']['$post']>,
    ) {
      return parseResponse(client['2015-01-01'].packages.describe.$post(args, options))
    },
  })
}

export function usePost20150101PackagesDescribe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2015-01-01']['packages']['describe']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2015-01-01']['packages']['describe']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20150101PackagesDescribeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get20150101EsReservedInstanceOfferingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-01-01']['es']['reservedInstanceOfferings']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2015-01-01', '/2015-01-01/es/reservedInstanceOfferings', keyArgs] as const
}

export function get20150101EsReservedInstanceOfferingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-01-01']['es']['reservedInstanceOfferings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20150101EsReservedInstanceOfferingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2015-01-01'].es.reservedInstanceOfferings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20150101EsReservedInstanceOfferings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2015-01-01']['es']['reservedInstanceOfferings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-01-01']['es']['reservedInstanceOfferings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['2015-01-01']['es']['reservedInstanceOfferings']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['2015-01-01']['es']['reservedInstanceOfferings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20150101EsReservedInstanceOfferingsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2015-01-01']['es']['reservedInstanceOfferings']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20150101EsReservedInstanceOfferingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20150101EsReservedInstanceOfferingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2015-01-01'].es.reservedInstanceOfferings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20150101EsReservedInstancesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-01-01']['es']['reservedInstances']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2015-01-01', '/2015-01-01/es/reservedInstances', keyArgs] as const
}

export function get20150101EsReservedInstancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-01-01']['es']['reservedInstances']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20150101EsReservedInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2015-01-01'].es.reservedInstances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20150101EsReservedInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2015-01-01']['es']['reservedInstances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-01-01']['es']['reservedInstances']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2015-01-01']['es']['reservedInstances']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2015-01-01']['es']['reservedInstances']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get20150101EsReservedInstancesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2015-01-01']['es']['reservedInstances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20150101EsReservedInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20150101EsReservedInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2015-01-01'].es.reservedInstances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPost20150101EsVpcEndpointsDescribeMutationKey() {
  return ['2015-01-01', '/2015-01-01/es/vpcEndpoints/describe', 'POST'] as const
}

export function getPost20150101EsVpcEndpointsDescribeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2015-01-01']['es']['vpcEndpoints']['describe']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20150101EsVpcEndpointsDescribeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-01-01']['es']['vpcEndpoints']['describe']['$post']
      >,
    ) {
      return parseResponse(client['2015-01-01'].es.vpcEndpoints.describe.$post(args, options))
    },
  })
}

export function usePost20150101EsVpcEndpointsDescribe<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['2015-01-01']['es']['vpcEndpoints']['describe']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2015-01-01']['es']['vpcEndpoints']['describe']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20150101EsVpcEndpointsDescribeMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPost20150101PackagesDissociatePackageIDDomainNameMutationKey() {
  return ['2015-01-01', '/2015-01-01/packages/dissociate/:PackageID/:DomainName', 'POST'] as const
}

export function getPost20150101PackagesDissociatePackageIDDomainNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2015-01-01']['packages']['dissociate'][':PackageID'][':DomainName']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20150101PackagesDissociatePackageIDDomainNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-01-01']['packages']['dissociate'][':PackageID'][':DomainName']['$post']
      >,
    ) {
      return parseResponse(
        client['2015-01-01'].packages.dissociate[':PackageID'][':DomainName'].$post(args, options),
      )
    },
  })
}

export function usePost20150101PackagesDissociatePackageIDDomainName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['2015-01-01']['packages']['dissociate'][':PackageID'][':DomainName']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20150101PackagesDissociatePackageIDDomainNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get20150101EsCompatibleVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-01-01']['es']['compatibleVersions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2015-01-01', '/2015-01-01/es/compatibleVersions', keyArgs] as const
}

export function get20150101EsCompatibleVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-01-01']['es']['compatibleVersions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20150101EsCompatibleVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2015-01-01'].es.compatibleVersions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20150101EsCompatibleVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2015-01-01']['es']['compatibleVersions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-01-01']['es']['compatibleVersions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2015-01-01']['es']['compatibleVersions']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2015-01-01']['es']['compatibleVersions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get20150101EsCompatibleVersionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2015-01-01']['es']['compatibleVersions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20150101EsCompatibleVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20150101EsCompatibleVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2015-01-01'].es.compatibleVersions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20150101PackagesPackageIDHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-01-01']['packages'][':PackageID']['history']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2015-01-01', '/2015-01-01/packages/:PackageID/history', keyArgs] as const
}

export function get20150101PackagesPackageIDHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-01-01']['packages'][':PackageID']['history']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20150101PackagesPackageIDHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2015-01-01'].packages[':PackageID'].history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20150101PackagesPackageIDHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2015-01-01']['packages'][':PackageID']['history']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-01-01']['packages'][':PackageID']['history']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['2015-01-01']['packages'][':PackageID']['history']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['2015-01-01']['packages'][':PackageID']['history']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20150101PackagesPackageIDHistoryQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2015-01-01']['packages'][':PackageID']['history']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20150101PackagesPackageIDHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20150101PackagesPackageIDHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2015-01-01'].packages[':PackageID'].history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20150101EsUpgradeDomainDomainNameHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2015-01-01']['es']['upgradeDomain'][':DomainName']['history']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2015-01-01', '/2015-01-01/es/upgradeDomain/:DomainName/history', keyArgs] as const
}

export function get20150101EsUpgradeDomainDomainNameHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2015-01-01']['es']['upgradeDomain'][':DomainName']['history']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20150101EsUpgradeDomainDomainNameHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2015-01-01'].es.upgradeDomain[':DomainName'].history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20150101EsUpgradeDomainDomainNameHistory<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2015-01-01']['es']['upgradeDomain'][':DomainName']['history']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof get20150101EsUpgradeDomainDomainNameHistoryQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
    TError,
    TData,
    ReturnType<typeof get20150101EsUpgradeDomainDomainNameHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20150101EsUpgradeDomainDomainNameHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2015-01-01'].es.upgradeDomain[':DomainName'].history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20150101EsUpgradeDomainDomainNameStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2015-01-01']['es']['upgradeDomain'][':DomainName']['status']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2015-01-01', '/2015-01-01/es/upgradeDomain/:DomainName/status', keyArgs] as const
}

export function get20150101EsUpgradeDomainDomainNameStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2015-01-01']['es']['upgradeDomain'][':DomainName']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20150101EsUpgradeDomainDomainNameStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2015-01-01'].es.upgradeDomain[':DomainName'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20150101EsUpgradeDomainDomainNameStatus<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2015-01-01']['es']['upgradeDomain'][':DomainName']['status']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof get20150101EsUpgradeDomainDomainNameStatusQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
    TError,
    TData,
    ReturnType<typeof get20150101EsUpgradeDomainDomainNameStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20150101EsUpgradeDomainDomainNameStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2015-01-01'].es.upgradeDomain[':DomainName'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20150101DomainQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2015-01-01']['domain']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2015-01-01', '/2015-01-01/domain', keyArgs] as const
}

export function get20150101DomainQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2015-01-01']['domain']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20150101DomainQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2015-01-01'].domain.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20150101Domain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2015-01-01']['domain']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2015-01-01']['domain']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2015-01-01']['domain']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2015-01-01']['domain']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20150101DomainQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2015-01-01']['domain']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20150101DomainQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20150101DomainQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2015-01-01'].domain.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20150101PackagesPackageIDDomainsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-01-01']['packages'][':PackageID']['domains']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2015-01-01', '/2015-01-01/packages/:PackageID/domains', keyArgs] as const
}

export function get20150101PackagesPackageIDDomainsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-01-01']['packages'][':PackageID']['domains']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20150101PackagesPackageIDDomainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2015-01-01'].packages[':PackageID'].domains.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20150101PackagesPackageIDDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2015-01-01']['packages'][':PackageID']['domains']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-01-01']['packages'][':PackageID']['domains']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['2015-01-01']['packages'][':PackageID']['domains']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['2015-01-01']['packages'][':PackageID']['domains']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20150101PackagesPackageIDDomainsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2015-01-01']['packages'][':PackageID']['domains']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20150101PackagesPackageIDDomainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20150101PackagesPackageIDDomainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2015-01-01'].packages[':PackageID'].domains.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20150101EsInstanceTypesElasticsearchVersionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2015-01-01']['es']['instanceTypes'][':ElasticsearchVersion']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2015-01-01', '/2015-01-01/es/instanceTypes/:ElasticsearchVersion', keyArgs] as const
}

export function get20150101EsInstanceTypesElasticsearchVersionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2015-01-01']['es']['instanceTypes'][':ElasticsearchVersion']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20150101EsInstanceTypesElasticsearchVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2015-01-01'].es.instanceTypes[':ElasticsearchVersion'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20150101EsInstanceTypesElasticsearchVersion<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2015-01-01']['es']['instanceTypes'][':ElasticsearchVersion']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof get20150101EsInstanceTypesElasticsearchVersionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
    TError,
    TData,
    ReturnType<typeof get20150101EsInstanceTypesElasticsearchVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20150101EsInstanceTypesElasticsearchVersionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2015-01-01'].es.instanceTypes[':ElasticsearchVersion'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20150101EsVersionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2015-01-01']['es']['versions']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2015-01-01', '/2015-01-01/es/versions', keyArgs] as const
}

export function get20150101EsVersionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2015-01-01']['es']['versions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20150101EsVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2015-01-01'].es.versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20150101EsVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2015-01-01']['es']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2015-01-01']['es']['versions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2015-01-01']['es']['versions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2015-01-01']['es']['versions']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20150101EsVersionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2015-01-01']['es']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20150101EsVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20150101EsVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2015-01-01'].es.versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20150101DomainDomainNamePackagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-01-01']['domain'][':DomainName']['packages']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2015-01-01', '/2015-01-01/domain/:DomainName/packages', keyArgs] as const
}

export function get20150101DomainDomainNamePackagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-01-01']['domain'][':DomainName']['packages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20150101DomainDomainNamePackagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2015-01-01'].domain[':DomainName'].packages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20150101DomainDomainNamePackages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2015-01-01']['domain'][':DomainName']['packages']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2015-01-01']['domain'][':DomainName']['packages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['2015-01-01']['domain'][':DomainName']['packages']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['2015-01-01']['domain'][':DomainName']['packages']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20150101DomainDomainNamePackagesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2015-01-01']['domain'][':DomainName']['packages']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20150101DomainDomainNamePackagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20150101DomainDomainNamePackagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2015-01-01'].domain[':DomainName'].packages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20150101TagsArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2015-01-01']['tags']['#arn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2015-01-01', '/2015-01-01/tags/#arn', keyArgs] as const
}

export function get20150101TagsArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2015-01-01']['tags']['#arn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20150101TagsArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2015-01-01'].tags['#arn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20150101TagsArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2015-01-01']['tags']['#arn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2015-01-01']['tags']['#arn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2015-01-01']['tags']['#arn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2015-01-01']['tags']['#arn']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20150101TagsArnQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2015-01-01']['tags']['#arn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20150101TagsArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20150101TagsArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2015-01-01'].tags['#arn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20150101EsDomainDomainNameListVpcEndpointAccessQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2015-01-01']['es']['domain'][':DomainName']['listVpcEndpointAccess']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2015-01-01', '/2015-01-01/es/domain/:DomainName/listVpcEndpointAccess', keyArgs] as const
}

export function get20150101EsDomainDomainNameListVpcEndpointAccessQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2015-01-01']['es']['domain'][':DomainName']['listVpcEndpointAccess']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20150101EsDomainDomainNameListVpcEndpointAccessQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2015-01-01'].es.domain[':DomainName'].listVpcEndpointAccess.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20150101EsDomainDomainNameListVpcEndpointAccess<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2015-01-01']['es']['domain'][':DomainName']['listVpcEndpointAccess']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof get20150101EsDomainDomainNameListVpcEndpointAccessQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
    TError,
    TData,
    ReturnType<typeof get20150101EsDomainDomainNameListVpcEndpointAccessQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20150101EsDomainDomainNameListVpcEndpointAccessQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2015-01-01'].es.domain[':DomainName'].listVpcEndpointAccess.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20150101EsDomainDomainNameVpcEndpointsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2015-01-01']['es']['domain'][':DomainName']['vpcEndpoints']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2015-01-01', '/2015-01-01/es/domain/:DomainName/vpcEndpoints', keyArgs] as const
}

export function get20150101EsDomainDomainNameVpcEndpointsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2015-01-01']['es']['domain'][':DomainName']['vpcEndpoints']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20150101EsDomainDomainNameVpcEndpointsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2015-01-01'].es.domain[':DomainName'].vpcEndpoints.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20150101EsDomainDomainNameVpcEndpoints<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2015-01-01']['es']['domain'][':DomainName']['vpcEndpoints']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          TError,
          TData,
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
          ReturnType<typeof get20150101EsDomainDomainNameVpcEndpointsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
    TError,
    TData,
    ReturnType<typeof get20150101EsDomainDomainNameVpcEndpointsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20150101EsDomainDomainNameVpcEndpointsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2015-01-01'].es.domain[':DomainName'].vpcEndpoints.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPost20150101EsPurchaseReservedInstanceOfferingMutationKey() {
  return ['2015-01-01', '/2015-01-01/es/purchaseReservedInstanceOffering', 'POST'] as const
}

export function getPost20150101EsPurchaseReservedInstanceOfferingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2015-01-01']['es']['purchaseReservedInstanceOffering']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20150101EsPurchaseReservedInstanceOfferingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-01-01']['es']['purchaseReservedInstanceOffering']['$post']
      >,
    ) {
      return parseResponse(
        client['2015-01-01'].es.purchaseReservedInstanceOffering.$post(args, options),
      )
    },
  })
}

export function usePost20150101EsPurchaseReservedInstanceOffering<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['2015-01-01']['es']['purchaseReservedInstanceOffering']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20150101EsPurchaseReservedInstanceOfferingMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPut20150101EsCcsInboundConnectionConnectionIdRejectMutationKey() {
  return ['2015-01-01', '/2015-01-01/es/ccs/inboundConnection/:ConnectionId/reject', 'PUT'] as const
}

export function getPut20150101EsCcsInboundConnectionConnectionIdRejectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2015-01-01']['es']['ccs']['inboundConnection'][':ConnectionId']['reject']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPut20150101EsCcsInboundConnectionConnectionIdRejectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-01-01']['es']['ccs']['inboundConnection'][':ConnectionId']['reject']['$put']
      >,
    ) {
      return parseResponse(
        client['2015-01-01'].es.ccs.inboundConnection[':ConnectionId'].reject.$put(args, options),
      )
    },
  })
}

export function usePut20150101EsCcsInboundConnectionConnectionIdReject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['2015-01-01']['es']['ccs']['inboundConnection'][':ConnectionId']['reject']['$put']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPut20150101EsCcsInboundConnectionConnectionIdRejectMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPost20150101TagsRemovalMutationKey() {
  return ['2015-01-01', '/2015-01-01/tags-removal', 'POST'] as const
}

export function getPost20150101TagsRemovalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2015-01-01']['tags-removal']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2015-01-01']['tags-removal']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20150101TagsRemovalMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2015-01-01']['tags-removal']['$post']>,
    ) {
      return parseResponse(client['2015-01-01']['tags-removal'].$post(args, options))
    },
  })
}

export function usePost20150101TagsRemoval<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2015-01-01']['tags-removal']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2015-01-01']['tags-removal']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20150101TagsRemovalMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPost20150101EsDomainDomainNameRevokeVpcEndpointAccessMutationKey() {
  return [
    '2015-01-01',
    '/2015-01-01/es/domain/:DomainName/revokeVpcEndpointAccess',
    'POST',
  ] as const
}

export function getPost20150101EsDomainDomainNameRevokeVpcEndpointAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2015-01-01']['es']['domain'][':DomainName']['revokeVpcEndpointAccess']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20150101EsDomainDomainNameRevokeVpcEndpointAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-01-01']['es']['domain'][':DomainName']['revokeVpcEndpointAccess']['$post']
      >,
    ) {
      return parseResponse(
        client['2015-01-01'].es.domain[':DomainName'].revokeVpcEndpointAccess.$post(args, options),
      )
    },
  })
}

export function usePost20150101EsDomainDomainNameRevokeVpcEndpointAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['2015-01-01']['es']['domain'][':DomainName']['revokeVpcEndpointAccess']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20150101EsDomainDomainNameRevokeVpcEndpointAccessMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPost20150101EsServiceSoftwareUpdateStartMutationKey() {
  return ['2015-01-01', '/2015-01-01/es/serviceSoftwareUpdate/start', 'POST'] as const
}

export function getPost20150101EsServiceSoftwareUpdateStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2015-01-01']['es']['serviceSoftwareUpdate']['start']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20150101EsServiceSoftwareUpdateStartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-01-01']['es']['serviceSoftwareUpdate']['start']['$post']
      >,
    ) {
      return parseResponse(client['2015-01-01'].es.serviceSoftwareUpdate.start.$post(args, options))
    },
  })
}

export function usePost20150101EsServiceSoftwareUpdateStart<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['2015-01-01']['es']['serviceSoftwareUpdate']['start']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20150101EsServiceSoftwareUpdateStartMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPost20150101PackagesUpdateMutationKey() {
  return ['2015-01-01', '/2015-01-01/packages/update', 'POST'] as const
}

export function getPost20150101PackagesUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2015-01-01']['packages']['update']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2015-01-01']['packages']['update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20150101PackagesUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2015-01-01']['packages']['update']['$post']>,
    ) {
      return parseResponse(client['2015-01-01'].packages.update.$post(args, options))
    },
  })
}

export function usePost20150101PackagesUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2015-01-01']['packages']['update']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2015-01-01']['packages']['update']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20150101PackagesUpdateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPost20150101EsVpcEndpointsUpdateMutationKey() {
  return ['2015-01-01', '/2015-01-01/es/vpcEndpoints/update', 'POST'] as const
}

export function getPost20150101EsVpcEndpointsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2015-01-01']['es']['vpcEndpoints']['update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20150101EsVpcEndpointsUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2015-01-01']['es']['vpcEndpoints']['update']['$post']
      >,
    ) {
      return parseResponse(client['2015-01-01'].es.vpcEndpoints.update.$post(args, options))
    },
  })
}

export function usePost20150101EsVpcEndpointsUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<(typeof client)['2015-01-01']['es']['vpcEndpoints']['update']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20150101EsVpcEndpointsUpdateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPost20150101EsUpgradeDomainMutationKey() {
  return ['2015-01-01', '/2015-01-01/es/upgradeDomain', 'POST'] as const
}

export function getPost20150101EsUpgradeDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2015-01-01']['es']['upgradeDomain']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2015-01-01']['es']['upgradeDomain']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20150101EsUpgradeDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2015-01-01']['es']['upgradeDomain']['$post']>,
    ) {
      return parseResponse(client['2015-01-01'].es.upgradeDomain.$post(args, options))
    },
  })
}

export function usePost20150101EsUpgradeDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2015-01-01']['es']['upgradeDomain']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2015-01-01']['es']['upgradeDomain']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20150101EsUpgradeDomainMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
