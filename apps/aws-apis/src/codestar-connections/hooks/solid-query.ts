import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
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

export function getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateConnectionMutationKey() {
  return [
    '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection',
    '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection',
    'POST',
  ] as const
}

export function getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateConnection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateConnectionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateHostMutationKey() {
  return [
    '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateHost',
    '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateHost',
    'POST',
  ] as const
}

export function getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateHostMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateHost']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateHostMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateHost']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateHost'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateHost<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateHost']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateHostMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201DeleteConnectionMutationKey() {
  return [
    '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteConnection',
    '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteConnection',
    'POST',
  ] as const
}

export function getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201DeleteConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteConnection']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201DeleteConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteConnection']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteConnection'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201DeleteConnection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteConnection']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201DeleteConnectionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201DeleteHostMutationKey() {
  return [
    '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteHost',
    '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteHost',
    'POST',
  ] as const
}

export function getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201DeleteHostMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteHost']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201DeleteHostMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteHost']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteHost'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201DeleteHost<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteHost']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201DeleteHostMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201GetConnectionMutationKey() {
  return [
    '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetConnection',
    '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetConnection',
    'POST',
  ] as const
}

export function getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201GetConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetConnection']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201GetConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetConnection']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetConnection'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201GetConnection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetConnection']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201GetConnectionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201GetHostMutationKey() {
  return [
    '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetHost',
    '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetHost',
    'POST',
  ] as const
}

export function getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201GetHostMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetHost']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201GetHostMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetHost']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetHost'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201GetHost<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetHost']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201GetHostMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListConnectionsMutationKey() {
  return [
    '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListConnections',
    '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListConnections',
    'POST',
  ] as const
}

export function getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListConnectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListConnections']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListConnectionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListConnections']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListConnections'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListConnections<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListConnections']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListConnectionsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListHostsMutationKey() {
  return [
    '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListHosts',
    '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListHosts',
    'POST',
  ] as const
}

export function getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListHostsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListHosts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListHostsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListHosts']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListHosts'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListHosts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListHosts']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListHostsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListTagsForResource',
    '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListTagsForResource'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListTagsForResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListTagsForResource']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListTagsForResourceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201TagResourceMutationKey() {
  return [
    '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.TagResource',
    '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201TagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.TagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201TagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.TagResource'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201TagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.TagResource']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201TagResourceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201UntagResourceMutationKey() {
  return [
    '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UntagResource',
    '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201UntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UntagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201UntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UntagResource'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201UntagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UntagResource']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201UntagResourceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201UpdateHostMutationKey() {
  return [
    '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UpdateHost',
    '/#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UpdateHost',
    'POST',
  ] as const
}

export function getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201UpdateHostMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UpdateHost']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201UpdateHostMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UpdateHost']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UpdateHost'
        ].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201UpdateHost<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UpdateHost']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201UpdateHostMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
