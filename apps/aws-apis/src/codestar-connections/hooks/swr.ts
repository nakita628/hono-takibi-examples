import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections_20191201CreateConnectionKey() {
  return [
    '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection',
  ] as const
}

export function getXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections_20191201CreateHostKey() {
  return [
    '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateHost',
  ] as const
}

export function getXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections_20191201DeleteConnectionKey() {
  return [
    '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteConnection',
  ] as const
}

export function getXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections_20191201DeleteHostKey() {
  return [
    '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteHost',
  ] as const
}

export function getXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections_20191201GetConnectionKey() {
  return [
    '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetConnection',
  ] as const
}

export function getXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections_20191201GetHostKey() {
  return [
    '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetHost',
  ] as const
}

export function getXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections_20191201ListConnectionsKey() {
  return [
    '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListConnections',
  ] as const
}

export function getXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections_20191201ListHostsKey() {
  return [
    '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListHosts',
  ] as const
}

export function getXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections_20191201ListTagsForResourceKey() {
  return [
    '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListTagsForResource',
  ] as const
}

export function getXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections_20191201TagResourceKey() {
  return [
    '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.TagResource',
  ] as const
}

export function getXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections_20191201UntagResourceKey() {
  return [
    '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UntagResource',
  ] as const
}

export function getXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections_20191201UpdateHostKey() {
  return [
    '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UpdateHost',
  ] as const
}

export function getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateConnectionKey() {
  return [
    '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection',
    '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateConnection<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateConnectionKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateHostKey() {
  return [
    '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateHost',
    '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateHost',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateHost<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateHost']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateHost']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateHostKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateHost']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateHost'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201DeleteConnectionKey() {
  return [
    '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteConnection',
    '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteConnection',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201DeleteConnection<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteConnection']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteConnection']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201DeleteConnectionKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteConnection']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteConnection'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201DeleteHostKey() {
  return [
    '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteHost',
    '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteHost',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201DeleteHost<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteHost']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteHost']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201DeleteHostKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteHost']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteHost'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201GetConnectionKey() {
  return [
    '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetConnection',
    '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetConnection',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201GetConnection<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetConnection']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetConnection']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201GetConnectionKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetConnection']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetConnection'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201GetHostKey() {
  return [
    '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetHost',
    '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetHost',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201GetHost<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetHost']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetHost']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201GetHostKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetHost']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetHost'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListConnectionsKey() {
  return [
    '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListConnections',
    '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListConnections',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListConnections<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListConnections']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListConnections']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListConnectionsKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListConnections']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListConnections'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListHostsKey() {
  return [
    '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListHosts',
    '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListHosts',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListHosts<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListHosts']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListHosts']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListHostsKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListHosts']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListHosts'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListTagsForResourceKey() {
  return [
    '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListTagsForResource',
    '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListTagsForResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListTagsForResource'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201TagResourceKey() {
  return [
    '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.TagResource',
    '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201TagResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.TagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.TagResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201TagResourceKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.TagResource'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201UntagResourceKey() {
  return [
    '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UntagResource',
    '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201UntagResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UntagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UntagResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201UntagResourceKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UntagResource'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201UpdateHostKey() {
  return [
    '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UpdateHost',
    '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UpdateHost',
    'POST',
  ] as const
}

export function usePostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201UpdateHost<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UpdateHost']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UpdateHost']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201UpdateHostKey()
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
            (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UpdateHost']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UpdateHost'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
