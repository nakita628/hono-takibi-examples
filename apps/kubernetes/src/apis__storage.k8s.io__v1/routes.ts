import { createRoute, z } from '@hono/zod-openapi'

const IoK8sApiCoreV1AWSElasticBlockStoreVolumeSourceSchema = z
  .object({
    fsType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore',
      }),
    partition: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'partition is the partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty).',
      }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'readOnly value true will force the readOnly setting in VolumeMounts. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore',
      }),
    volumeID: z
      .string()
      .default('')
      .openapi({
        description:
          'volumeID is unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore',
      }),
  })
  .openapi({
    description:
      'Represents a Persistent Disk resource in AWS.\n\nAn AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling.',
    required: ['volumeID'],
  })
  .openapi('IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource')

const IoK8sApiCoreV1AzureDiskVolumeSourceSchema = z
  .object({
    cachingMode: z
      .string()
      .default('ReadWrite')
      .exactOptional()
      .openapi({
        description: 'cachingMode is the Host Caching mode: None, Read Only, Read Write.',
      }),
    diskName: z
      .string()
      .default('')
      .openapi({ description: 'diskName is the Name of the data disk in the blob storage' }),
    diskURI: z
      .string()
      .default('')
      .openapi({ description: 'diskURI is the URI of data disk in the blob storage' }),
    fsType: z
      .string()
      .default('ext4')
      .exactOptional()
      .openapi({
        description:
          'fsType is Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.',
      }),
    kind: z
      .string()
      .default('Shared')
      .exactOptional()
      .openapi({
        description:
          'kind expected values are Shared: multiple blob disks per storage account  Dedicated: single blob disk per storage account  Managed: azure managed data disk (only in managed availability set). defaults to shared',
      }),
    readOnly: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.',
      }),
  })
  .openapi({
    description:
      'AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.',
    required: ['diskName', 'diskURI'],
  })
  .openapi('IoK8sApiCoreV1AzureDiskVolumeSource')

const IoK8sApiCoreV1AzureFilePersistentVolumeSourceSchema = z
  .object({
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.',
      }),
    secretName: z
      .string()
      .default('')
      .openapi({
        description:
          'secretName is the name of secret that contains Azure Storage Account Name and Key',
      }),
    secretNamespace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'secretNamespace is the namespace of the secret that contains Azure Storage Account Name and Key default is the same as the Pod',
      }),
    shareName: z.string().default('').openapi({ description: 'shareName is the azure Share Name' }),
  })
  .openapi({
    description:
      'AzureFile represents an Azure File Service mount on the host and bind mount to the pod.',
    required: ['secretName', 'shareName'],
  })
  .openapi('IoK8sApiCoreV1AzureFilePersistentVolumeSource')

const IoK8sApiCoreV1SecretReferenceSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'name is unique within a namespace to reference a secret resource.',
      }),
    namespace: z
      .string()
      .exactOptional()
      .openapi({
        description: 'namespace defines the space within which the secret name must be unique.',
      }),
  })
  .openapi({
    description:
      'SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace',
    'x-kubernetes-map-type': 'atomic',
    required: [],
  })
  .openapi('IoK8sApiCoreV1SecretReference')

const IoK8sApiCoreV1CSIPersistentVolumeSourceSchema = z
  .object({
    controllerExpandSecretRef: IoK8sApiCoreV1SecretReferenceSchema.exactOptional().openapi({
      description:
        'controllerExpandSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI ControllerExpandVolume call. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secrets are passed.',
    }),
    controllerPublishSecretRef: IoK8sApiCoreV1SecretReferenceSchema.exactOptional().openapi({
      description:
        'controllerPublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI ControllerPublishVolume and ControllerUnpublishVolume calls. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secrets are passed.',
    }),
    driver: z
      .string()
      .default('')
      .openapi({
        description: 'driver is the name of the driver to use for this volume. Required.',
      }),
    fsType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'fsType to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs".',
      }),
    nodeExpandSecretRef: IoK8sApiCoreV1SecretReferenceSchema.exactOptional().openapi({
      description:
        'nodeExpandSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodeExpandVolume call. This field is optional, may be omitted if no secret is required. If the secret object contains more than one secret, all secrets are passed.',
    }),
    nodePublishSecretRef: IoK8sApiCoreV1SecretReferenceSchema.exactOptional().openapi({
      description:
        'nodePublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodePublishVolume and NodeUnpublishVolume calls. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secrets are passed.',
    }),
    nodeStageSecretRef: IoK8sApiCoreV1SecretReferenceSchema.exactOptional().openapi({
      description:
        'nodeStageSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodeStageVolume and NodeStageVolume and NodeUnstageVolume calls. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secrets are passed.',
    }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'readOnly value to pass to ControllerPublishVolumeRequest. Defaults to false (read/write).',
      }),
    volumeAttributes: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'volumeAttributes of the volume to publish.' }),
    volumeHandle: z
      .string()
      .default('')
      .openapi({
        description:
          'volumeHandle is the unique volume name returned by the CSI volume plugin’s CreateVolume to refer to the volume on all subsequent calls. Required.',
      }),
  })
  .openapi({
    description: 'Represents storage that is managed by an external CSI volume driver',
    required: ['driver', 'volumeHandle'],
  })
  .openapi('IoK8sApiCoreV1CSIPersistentVolumeSource')

const IoK8sApiCoreV1CephFSPersistentVolumeSourceSchema = z
  .object({
    monitors: z
      .array(z.string())
      .openapi({
        description:
          'monitors is Required: Monitors is a collection of Ceph monitors More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it',
        'x-kubernetes-list-type': 'atomic',
      }),
    path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'path is Optional: Used as the mounted root, rather than the full Ceph tree, default is /',
      }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'readOnly is Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it',
      }),
    secretFile: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'secretFile is Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it',
      }),
    secretRef: IoK8sApiCoreV1SecretReferenceSchema.exactOptional().openapi({
      description:
        'secretRef is Optional: SecretRef is reference to the authentication secret for User, default is empty. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it',
    }),
    user: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'user is Optional: User is the rados user name, default is admin More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it',
      }),
  })
  .openapi({
    description:
      'Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling.',
    required: ['monitors'],
  })
  .openapi('IoK8sApiCoreV1CephFSPersistentVolumeSource')

const IoK8sApiCoreV1CinderPersistentVolumeSourceSchema = z
  .object({
    fsType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'fsType Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md',
      }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'readOnly is Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/mysql-cinder-pd/README.md',
      }),
    secretRef: IoK8sApiCoreV1SecretReferenceSchema.exactOptional().openapi({
      description:
        'secretRef is Optional: points to a secret object containing parameters used to connect to OpenStack.',
    }),
    volumeID: z
      .string()
      .default('')
      .openapi({
        description:
          'volumeID used to identify the volume in cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md',
      }),
  })
  .openapi({
    description:
      'Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.',
    required: ['volumeID'],
  })
  .openapi('IoK8sApiCoreV1CinderPersistentVolumeSource')

const IoK8sApiCoreV1FCVolumeSourceSchema = z
  .object({
    fsType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.',
      }),
    lun: z
      .int32()
      .exactOptional()
      .openapi({ description: 'lun is Optional: FC target lun number' }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'readOnly is Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.',
      }),
    targetWWNs: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'targetWWNs is Optional: FC target worldwide names (WWNs)',
        'x-kubernetes-list-type': 'atomic',
      }),
    wwids: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'wwids Optional: FC volume world wide identifiers (wwids) Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously.',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description:
      'Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling.',
    required: [],
  })
  .openapi('IoK8sApiCoreV1FCVolumeSource')

const IoK8sApiCoreV1FlexPersistentVolumeSourceSchema = z
  .object({
    driver: z
      .string()
      .default('')
      .openapi({ description: 'driver is the name of the driver to use for this volume.' }),
    fsType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'fsType is the Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script.',
      }),
    options: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'options is Optional: this field holds extra command options if any.',
      }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'readOnly is Optional: defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.',
      }),
    secretRef: IoK8sApiCoreV1SecretReferenceSchema.exactOptional().openapi({
      description:
        'secretRef is Optional: SecretRef is reference to the secret object containing sensitive information to pass to the plugin scripts. This may be empty if no secret object is specified. If the secret object contains more than one secret, all secrets are passed to the plugin scripts.',
    }),
  })
  .openapi({
    description:
      'FlexPersistentVolumeSource represents a generic persistent volume resource that is provisioned/attached using an exec based plugin.',
    required: ['driver'],
  })
  .openapi('IoK8sApiCoreV1FlexPersistentVolumeSource')

const IoK8sApiCoreV1FlockerVolumeSourceSchema = z
  .object({
    datasetName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'datasetName is Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated',
      }),
    datasetUUID: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'datasetUUID is the UUID of the dataset. This is unique identifier of a Flocker dataset',
      }),
  })
  .openapi({
    description:
      'Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling.',
    required: [],
  })
  .openapi('IoK8sApiCoreV1FlockerVolumeSource')

const IoK8sApiCoreV1GCEPersistentDiskVolumeSourceSchema = z
  .object({
    fsType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'fsType is filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk',
      }),
    partition: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'partition is the partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk',
      }),
    pdName: z
      .string()
      .default('')
      .openapi({
        description:
          'pdName is unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk',
      }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk',
      }),
  })
  .openapi({
    description:
      'Represents a Persistent Disk resource in Google Compute Engine.\n\nA GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling.',
    required: ['pdName'],
  })
  .openapi('IoK8sApiCoreV1GCEPersistentDiskVolumeSource')

const IoK8sApiCoreV1GlusterfsPersistentVolumeSourceSchema = z
  .object({
    endpoints: z
      .string()
      .default('')
      .openapi({
        description:
          'endpoints is the endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod',
      }),
    endpointsNamespace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'endpointsNamespace is the namespace that contains Glusterfs endpoint. If this field is empty, the EndpointNamespace defaults to the same namespace as the bound PVC. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod',
      }),
    path: z
      .string()
      .default('')
      .openapi({
        description:
          'path is the Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod',
      }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'readOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod',
      }),
  })
  .openapi({
    description:
      'Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling.',
    required: ['endpoints', 'path'],
  })
  .openapi('IoK8sApiCoreV1GlusterfsPersistentVolumeSource')

const IoK8sApiCoreV1HostPathVolumeSourceSchema = z
  .object({
    path: z
      .string()
      .default('')
      .openapi({
        description:
          'path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'type for HostPath Volume Defaults to "" More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath',
      }),
  })
  .openapi({
    description:
      'Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling.',
    required: ['path'],
  })
  .openapi('IoK8sApiCoreV1HostPathVolumeSource')

const IoK8sApiCoreV1ISCSIPersistentVolumeSourceSchema = z
  .object({
    chapAuthDiscovery: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'chapAuthDiscovery defines whether support iSCSI Discovery CHAP authentication',
      }),
    chapAuthSession: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'chapAuthSession defines whether support iSCSI Session CHAP authentication',
      }),
    fsType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi',
      }),
    initiatorName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'initiatorName is the custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection.',
      }),
    iqn: z.string().default('').openapi({ description: 'iqn is Target iSCSI Qualified Name.' }),
    iscsiInterface: z
      .string()
      .default('default')
      .exactOptional()
      .openapi({
        description:
          "iscsiInterface is the interface Name that uses an iSCSI transport. Defaults to 'default' (tcp).",
      }),
    lun: z
      .int32()
      .default(0)
      .exactOptional()
      .openapi({ description: 'lun is iSCSI Target Lun number.' }),
    portals: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'portals is the iSCSI Target Portal List. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).',
        'x-kubernetes-list-type': 'atomic',
      }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false.',
      }),
    secretRef: IoK8sApiCoreV1SecretReferenceSchema.exactOptional().openapi({
      description: 'secretRef is the CHAP Secret for iSCSI target and initiator authentication',
    }),
    targetPortal: z
      .string()
      .default('')
      .openapi({
        description:
          'targetPortal is iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).',
      }),
  })
  .openapi({
    description:
      'ISCSIPersistentVolumeSource represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.',
    required: ['targetPortal', 'iqn'],
  })
  .openapi('IoK8sApiCoreV1ISCSIPersistentVolumeSource')

const IoK8sApiCoreV1LocalVolumeSourceSchema = z
  .object({
    fsType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'fsType is the filesystem type to mount. It applies only when the Path is a block device. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default value is to auto-select a filesystem if unspecified.',
      }),
    path: z
      .string()
      .default('')
      .openapi({
        description:
          'path of the full path to the volume on the node. It can be either a directory or block device (disk, partition, ...).',
      }),
  })
  .openapi({
    description: 'Local represents directly-attached storage with node affinity',
    required: ['path'],
  })
  .openapi('IoK8sApiCoreV1LocalVolumeSource')

const IoK8sApiCoreV1NFSVolumeSourceSchema = z
  .object({
    path: z
      .string()
      .default('')
      .openapi({
        description:
          'path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs',
      }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'readOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs',
      }),
    server: z
      .string()
      .default('')
      .openapi({
        description:
          'server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs',
      }),
  })
  .openapi({
    description:
      'Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling.',
    required: ['server', 'path'],
  })
  .openapi('IoK8sApiCoreV1NFSVolumeSource')

const IoK8sApiCoreV1NodeSelectorRequirementSchema = z
  .object({
    key: z
      .string()
      .default('')
      .openapi({ description: 'key is the label key that the selector applies to.' }),
    operator: z
      .string()
      .default('')
      .openapi({
        description:
          "operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.",
      }),
    values: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description:
      'A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.',
    required: ['key', 'operator'],
  })
  .openapi('IoK8sApiCoreV1NodeSelectorRequirement')

const IoK8sApiCoreV1NodeSelectorTermSchema = z
  .object({
    matchExpressions: z
      .array(IoK8sApiCoreV1NodeSelectorRequirementSchema)
      .exactOptional()
      .openapi({
        description: "matchExpressions is a list of node selector requirements by node's labels.",
        'x-kubernetes-list-type': 'atomic',
      }),
    matchFields: z
      .array(IoK8sApiCoreV1NodeSelectorRequirementSchema)
      .exactOptional()
      .openapi({
        description: "matchFields is a list of node selector requirements by node's fields.",
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description:
      'A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.',
    'x-kubernetes-map-type': 'atomic',
    required: [],
  })
  .openapi('IoK8sApiCoreV1NodeSelectorTerm')

const IoK8sApiCoreV1NodeSelectorSchema = z
  .object({
    nodeSelectorTerms: z
      .array(IoK8sApiCoreV1NodeSelectorTermSchema)
      .openapi({
        description:
          'nodeSelectorTerms is a list of node selector terms. The terms are ORed. Required. A list of node selector terms. The terms are ORed.',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description:
      'A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms.',
    required: ['nodeSelectorTerms'],
    'x-kubernetes-map-type': 'atomic',
  })
  .openapi('IoK8sApiCoreV1NodeSelector')

const IoK8sApiCoreV1ObjectReferenceSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'apiVersion is API version of the referent.' }),
    fieldPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'fieldPath if referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: "spec.containers{name}" (where "name" refers to the name of the container that triggered the event) or if no container name is specified "spec.containers[2]" (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names',
      }),
    namespace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/',
      }),
    resourceVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'resourceVersion is the specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency',
      }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'uid of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids',
      }),
  })
  .openapi({
    description:
      'ObjectReference contains enough information to let you inspect or modify the referred object.',
    'x-kubernetes-map-type': 'atomic',
    required: [],
  })
  .openapi('IoK8sApiCoreV1ObjectReference')

const IoK8sApimachineryPkgApiResourceQuantitySchema = z
  .xor([z.string(), z.number()])
  .openapi({
    description:
      'Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.\n\nThe serialization format is:\n\n- `<quantity>`: `<signedNumber><suffix>`\n\n- `<digit>`: `0 | 1 | ... | 9`\n\n- `<digits>`: `<digit> | <digit><digits>`\n\n- `<number>`: `<digits> | <digits>.<digits> | <digits>. | .<digits>`\n\n- `<sign>`: `"+" | "-"`\n\n- `<signedNumber>`: `<number> | <sign><number>`\n\n- `<signedDigits>`: `<digits> | <sign><digits>`\n\n- `<suffix>`: `<binarySI> | <decimalExponent> | <decimalSI>`\n\n- `<binarySI>`: `Ki | Mi | Gi | Ti | Pi | Ei`\n\n- `<decimalSI>`: `n | u | m | "" | k | M | G | T | P | E`\n\n- `<decimalExponent>`: `"e" <signedDigits> | "E" <signedDigits>`\n\nNote that `<suffix>` may be empty, from the `""` case in `<decimalSI>`. For `<binarySI>`, 1024 = 1Ki but 1000 = 1k; I didn\'t choose the capitalization. See http://physics.nist.gov/cuu/Units/binary.html.\n\nA decimal quantity is not capped at 2^63-1 in magnitude, and no quantity is limited to three decimal places: "18446744073709551616" keeps its value, and "1.2345" keeps its precision (String reports it as "1234500u"). Parsing does cap a binarySI quantity, silently, at 2^63-1: "8Ei" parses as 2^63-1. Parsing also preserves a value only down to nano, rounding a finer non-zero value away from zero, so "0.9n" becomes "1n". The int64 accessors round and may overflow on top of that: see Value, MilliValue and ScaledValue.\n\nWhen a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.\n\nBefore serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:\n\n- No precision is lost\n\n- No fractional digits will be emitted\n\n- The exponent (or suffix) is as large as possible.\n\nThe sign will be omitted unless the number is negative.\n\nExamples:\n\n- 1.5 will be serialized as "1500m"\n\n- 1.5Gi will be serialized as "1536Mi"\n\nNote that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.\n\nNon-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don\'t diff.)\n\nThis format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.',
  })
  .openapi('IoK8sApimachineryPkgApiResourceQuantity')

const IoK8sApiCoreV1VolumeNodeAffinitySchema = z
  .object({
    required: IoK8sApiCoreV1NodeSelectorSchema.openapi({
      description: 'required specifies hard node constraints that must be met.',
    }),
  })
  .openapi({
    description:
      'VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from.',
    required: ['required'],
  })
  .openapi('IoK8sApiCoreV1VolumeNodeAffinity')

const IoK8sApiCoreV1PhotonPersistentDiskVolumeSourceSchema = z
  .object({
    fsType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.',
      }),
    pdID: z
      .string()
      .default('')
      .openapi({ description: 'pdID is the ID that identifies Photon Controller persistent disk' }),
  })
  .openapi({
    description: 'Represents a Photon Controller persistent disk resource.',
    required: ['pdID'],
  })
  .openapi('IoK8sApiCoreV1PhotonPersistentDiskVolumeSource')

const IoK8sApiCoreV1PortworxVolumeSourceSchema = z
  .object({
    fsType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'fsType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs". Implicitly inferred to be "ext4" if unspecified.',
      }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.',
      }),
    volumeID: z
      .string()
      .default('')
      .openapi({ description: 'volumeID uniquely identifies a Portworx volume' }),
  })
  .openapi({
    description: 'PortworxVolumeSource represents a Portworx volume resource.',
    required: ['volumeID'],
  })
  .openapi('IoK8sApiCoreV1PortworxVolumeSource')

const IoK8sApiCoreV1QuobyteVolumeSourceSchema = z
  .object({
    group: z
      .string()
      .exactOptional()
      .openapi({ description: 'group to map volume access to Default is no group' }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'readOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false.',
      }),
    registry: z
      .string()
      .default('')
      .openapi({
        description:
          'registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes',
      }),
    tenant: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin',
      }),
    user: z
      .string()
      .exactOptional()
      .openapi({ description: 'user to map volume access to Defaults to serivceaccount user' }),
    volume: z
      .string()
      .default('')
      .openapi({
        description:
          'volume is a string that references an already created Quobyte volume by name.',
      }),
  })
  .openapi({
    description:
      'Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling.',
    required: ['registry', 'volume'],
  })
  .openapi('IoK8sApiCoreV1QuobyteVolumeSource')

const IoK8sApiCoreV1RBDPersistentVolumeSourceSchema = z
  .object({
    fsType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd',
      }),
    image: z
      .string()
      .default('')
      .openapi({
        description:
          'image is the rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it',
      }),
    keyring: z
      .string()
      .default('/etc/ceph/keyring')
      .exactOptional()
      .openapi({
        description:
          'keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it',
      }),
    monitors: z
      .array(z.string())
      .openapi({
        description:
          'monitors is a collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it',
        'x-kubernetes-list-type': 'atomic',
      }),
    pool: z
      .string()
      .default('rbd')
      .exactOptional()
      .openapi({
        description:
          'pool is the rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it',
      }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it',
      }),
    secretRef: IoK8sApiCoreV1SecretReferenceSchema.exactOptional().openapi({
      description:
        'secretRef is name of the authentication secret for RBDUser. If provided overrides keyring. Default is nil. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it',
    }),
    user: z
      .string()
      .default('admin')
      .exactOptional()
      .openapi({
        description:
          'user is the rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it',
      }),
  })
  .openapi({
    description:
      'Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling.',
    required: ['monitors', 'image'],
  })
  .openapi('IoK8sApiCoreV1RBDPersistentVolumeSource')

const IoK8sApiCoreV1ScaleIOPersistentVolumeSourceSchema = z
  .object({
    fsType: z
      .string()
      .default('xfs')
      .exactOptional()
      .openapi({
        description:
          'fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Default is "xfs"',
      }),
    gateway: z
      .string()
      .default('')
      .openapi({ description: 'gateway is the host address of the ScaleIO API Gateway.' }),
    protectionDomain: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'protectionDomain is the name of the ScaleIO Protection Domain for the configured storage.',
      }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.',
      }),
    secretRef: IoK8sApiCoreV1SecretReferenceSchema.exactOptional().openapi({
      description:
        'secretRef references to the secret for ScaleIO user and other sensitive information. If this is not provided, Login operation will fail.',
    }),
    sslEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'sslEnabled is the flag to enable/disable SSL communication with Gateway, default false',
      }),
    storageMode: z
      .string()
      .default('ThinProvisioned')
      .exactOptional()
      .openapi({
        description:
          'storageMode indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.',
      }),
    storagePool: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'storagePool is the ScaleIO Storage Pool associated with the protection domain.',
      }),
    system: z
      .string()
      .default('')
      .openapi({
        description: 'system is the name of the storage system as configured in ScaleIO.',
      }),
    volumeName: z
      .string()
      .openapi({
        description:
          'volumeName is the name of a volume already created in the ScaleIO system that is associated with this volume source.',
      }),
  })
  .openapi({
    description: 'ScaleIOPersistentVolumeSource represents a persistent ScaleIO volume',
    required: ['gateway', 'system', 'volumeName'],
  })
  .openapi('IoK8sApiCoreV1ScaleIOPersistentVolumeSource')

const IoK8sApiCoreV1StorageOSPersistentVolumeSourceSchema = z
  .object({
    fsType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.',
      }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.',
      }),
    secretRef: IoK8sApiCoreV1ObjectReferenceSchema.exactOptional().openapi({
      description:
        'secretRef specifies the secret to use for obtaining the StorageOS API credentials.  If not specified, default values will be attempted.',
    }),
    volumeName: z
      .string()
      .openapi({
        description:
          'volumeName is the human-readable name of the StorageOS volume.  Volume names are only unique within a namespace.',
      }),
    volumeNamespace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'volumeNamespace specifies the scope of the volume within StorageOS.  If no namespace is specified then the Pod\'s namespace will be used.  This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to "default" if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created.',
      }),
  })
  .openapi({
    description: 'Represents a StorageOS persistent volume resource.',
    required: ['volumeName'],
  })
  .openapi('IoK8sApiCoreV1StorageOSPersistentVolumeSource')

const IoK8sApiCoreV1VsphereVirtualDiskVolumeSourceSchema = z
  .object({
    fsType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'fsType is filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.',
      }),
    storagePolicyID: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'storagePolicyID is the storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName.',
      }),
    storagePolicyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'storagePolicyName is the storage Policy Based Management (SPBM) profile name.',
      }),
    volumePath: z
      .string()
      .default('')
      .openapi({ description: 'volumePath is the path that identifies vSphere volume vmdk' }),
  })
  .openapi({ description: 'Represents a vSphere volume resource.', required: ['volumePath'] })
  .openapi('IoK8sApiCoreV1VsphereVirtualDiskVolumeSource')

const IoK8sApiCoreV1PersistentVolumeSpecSchema = z
  .object({
    accessModes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'accessModes contains all ways the volume can be mounted. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes',
        'x-kubernetes-list-type': 'atomic',
      }),
    awsElasticBlockStore:
      IoK8sApiCoreV1AWSElasticBlockStoreVolumeSourceSchema.exactOptional().openapi({
        description:
          "awsElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod.\n\nDeprecated: AWSElasticBlockStore is deprecated. All operations for the in-tree awsElasticBlockStore type are redirected to the ebs.csi.aws.com CSI driver. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore",
      }),
    azureDisk: IoK8sApiCoreV1AzureDiskVolumeSourceSchema.exactOptional().openapi({
      description:
        'azureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.\n\nDeprecated: AzureDisk is deprecated. All operations for the in-tree azureDisk type are redirected to the disk.csi.azure.com CSI driver.',
    }),
    azureFile: IoK8sApiCoreV1AzureFilePersistentVolumeSourceSchema.exactOptional().openapi({
      description:
        'azureFile represents an Azure File Service mount on the host and bind mount to the pod.\n\nDeprecated: AzureFile is deprecated. All operations for the in-tree azureFile type are redirected to the file.csi.azure.com CSI driver.',
    }),
    capacity: z
      .record(z.string(), IoK8sApimachineryPkgApiResourceQuantitySchema)
      .exactOptional()
      .openapi({
        description:
          "capacity is the description of the persistent volume's resources and capacity. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity",
      }),
    cephfs: IoK8sApiCoreV1CephFSPersistentVolumeSourceSchema.exactOptional().openapi({
      description:
        "cephfs represents a Ceph FS mount on the host that shares a pod's lifetime.\n\nDeprecated: CephFS is deprecated and the in-tree cephfs type is no longer supported.",
    }),
    cinder: IoK8sApiCoreV1CinderPersistentVolumeSourceSchema.exactOptional().openapi({
      description:
        'cinder represents a cinder volume attached and mounted on kubelets host machine.\n\nDeprecated: Cinder is deprecated. All operations for the in-tree cinder type are redirected to the cinder.csi.openstack.org CSI driver. More info: https://examples.k8s.io/mysql-cinder-pd/README.md',
    }),
    claimRef: IoK8sApiCoreV1ObjectReferenceSchema.exactOptional().openapi({
      description:
        'claimRef is part of a bi-directional binding between PersistentVolume and PersistentVolumeClaim. Expected to be non-nil when bound. claim.VolumeName is the authoritative bind between PV and PVC. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#binding',
      'x-kubernetes-map-type': 'granular',
    }),
    csi: IoK8sApiCoreV1CSIPersistentVolumeSourceSchema.exactOptional().openapi({
      description: 'csi represents storage that is handled by an external CSI driver.',
    }),
    fc: IoK8sApiCoreV1FCVolumeSourceSchema.exactOptional().openapi({
      description:
        "fc represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.",
    }),
    flexVolume: IoK8sApiCoreV1FlexPersistentVolumeSourceSchema.exactOptional().openapi({
      description:
        'flexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.\n\nDeprecated: FlexVolume is deprecated. Consider using a CSIDriver instead.',
    }),
    flocker: IoK8sApiCoreV1FlockerVolumeSourceSchema.exactOptional().openapi({
      description:
        "flocker represents a Flocker volume attached to a kubelet's host machine and exposed to the pod for its usage. This depends on the Flocker control service being running.\n\nDeprecated: Flocker is deprecated and the in-tree flocker type is no longer supported.",
    }),
    gcePersistentDisk: IoK8sApiCoreV1GCEPersistentDiskVolumeSourceSchema.exactOptional().openapi({
      description:
        "gcePersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. Provisioned by an admin.\n\nDeprecated: GCEPersistentDisk is deprecated. All operations for the in-tree gcePersistentDisk type are redirected to the pd.csi.storage.gke.io CSI driver. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk",
    }),
    glusterfs: IoK8sApiCoreV1GlusterfsPersistentVolumeSourceSchema.exactOptional().openapi({
      description:
        'glusterfs represents a Glusterfs volume that is attached to a host and exposed to the pod. Provisioned by an admin.\n\nDeprecated: Glusterfs is deprecated and the in-tree glusterfs type is no longer supported. More info: https://examples.k8s.io/volumes/glusterfs/README.md',
    }),
    hostPath: IoK8sApiCoreV1HostPathVolumeSourceSchema.exactOptional().openapi({
      description:
        'hostPath represents a directory on the host. Provisioned by a developer or tester. This is useful for single-node development and testing only! On-host storage is not supported in any way and WILL NOT WORK in a multi-node cluster. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath',
    }),
    iscsi: IoK8sApiCoreV1ISCSIPersistentVolumeSourceSchema.exactOptional().openapi({
      description:
        "iscsi represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. Provisioned by an admin.",
    }),
    local: IoK8sApiCoreV1LocalVolumeSourceSchema.exactOptional().openapi({
      description: 'local represents directly-attached storage with node affinity',
    }),
    mountOptions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'mountOptions is the list of mount options, e.g. ["ro", "soft"]. Not validated - mount will simply fail if one is invalid. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#mount-options',
        'x-kubernetes-list-type': 'atomic',
      }),
    nfs: IoK8sApiCoreV1NFSVolumeSourceSchema.exactOptional().openapi({
      description:
        'nfs represents an NFS mount on the host. Provisioned by an admin. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs',
    }),
    nodeAffinity: IoK8sApiCoreV1VolumeNodeAffinitySchema.exactOptional().openapi({
      description:
        'nodeAffinity defines constraints that limit what nodes this volume can be accessed from. This field influences the scheduling of pods that use this volume. This field is mutable if MutablePVNodeAffinity feature gate is enabled.',
    }),
    persistentVolumeReclaimPolicy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'persistentVolumeReclaimPolicy defines what happens to a persistent volume when released from its claim. Valid options are Retain (default for manually created PersistentVolumes), Delete (default for dynamically provisioned PersistentVolumes), and Recycle (deprecated). Recycle must be supported by the volume plugin underlying this PersistentVolume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#reclaiming',
      }),
    photonPersistentDisk:
      IoK8sApiCoreV1PhotonPersistentDiskVolumeSourceSchema.exactOptional().openapi({
        description:
          'photonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine.\n\nDeprecated: PhotonPersistentDisk is deprecated and the in-tree photonPersistentDisk type is no longer supported.',
      }),
    portworxVolume: IoK8sApiCoreV1PortworxVolumeSourceSchema.exactOptional().openapi({
      description:
        'portworxVolume represents a portworx volume attached and mounted on kubelets host machine.\n\nDeprecated: PortworxVolume is deprecated. All operations for the in-tree portworxVolume type are redirected to the pxd.portworx.com CSI driver.',
    }),
    quobyte: IoK8sApiCoreV1QuobyteVolumeSourceSchema.exactOptional().openapi({
      description:
        "quobyte represents a Quobyte mount on the host that shares a pod's lifetime.\n\nDeprecated: Quobyte is deprecated and the in-tree quobyte type is no longer supported.",
    }),
    rbd: IoK8sApiCoreV1RBDPersistentVolumeSourceSchema.exactOptional().openapi({
      description:
        "rbd represents a Rados Block Device mount on the host that shares a pod's lifetime.\n\nDeprecated: RBD is deprecated and the in-tree rbd type is no longer supported. More info: https://examples.k8s.io/volumes/rbd/README.md",
    }),
    scaleIO: IoK8sApiCoreV1ScaleIOPersistentVolumeSourceSchema.exactOptional().openapi({
      description:
        'scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.\n\nDeprecated: ScaleIO is deprecated and the in-tree scaleIO type is no longer supported.',
    }),
    storageClassName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'storageClassName is the name of StorageClass to which this persistent volume belongs. Empty value means that this volume does not belong to any StorageClass.',
      }),
    storageos: IoK8sApiCoreV1StorageOSPersistentVolumeSourceSchema.exactOptional().openapi({
      description:
        "storageos represents a StorageOS volume that is attached to the kubelet's host machine and mounted into the pod.\n\nDeprecated: StorageOS is deprecated and the in-tree storageos type is no longer supported. More info: https://examples.k8s.io/volumes/storageos/README.md",
    }),
    volumeAttributesClassName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'volumeAttributesClassName is the name of VolumeAttributesClass to which this persistent volume belongs. Empty value is not allowed. When this field is not set, it indicates that this volume does not belong to any VolumeAttributesClass. This field is mutable and can be changed by the CSI driver after a volume has been updated successfully to a new class. For an unbound PersistentVolume, the volumeAttributesClassName will be matched with unbound PersistentVolumeClaims during the binding process.',
      }),
    volumeMode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'volumeMode defines if a volume is intended to be used with a formatted filesystem or to remain in raw block state. Value of Filesystem is implied when not included in spec.',
      }),
    vsphereVolume: IoK8sApiCoreV1VsphereVirtualDiskVolumeSourceSchema.exactOptional().openapi({
      description:
        'vsphereVolume represents a vSphere volume attached and mounted on kubelets host machine.\n\nDeprecated: VsphereVolume is deprecated. All operations for the in-tree vsphereVolume type are redirected to the csi.vsphere.vmware.com CSI driver.',
    }),
  })
  .openapi({
    description: 'PersistentVolumeSpec is the specification of a persistent volume.',
    required: [],
  })
  .openapi('IoK8sApiCoreV1PersistentVolumeSpec')

const IoK8sApiCoreV1TopologySelectorLabelRequirementSchema = z
  .object({
    key: z
      .string()
      .default('')
      .openapi({ description: 'key is the label key that the selector applies to.' }),
    values: z
      .array(z.string())
      .openapi({
        description:
          'values is an array of string values. One value must match the label to be selected. Each entry in values is ORed.',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description:
      'A topology selector requirement is a selector that matches given label. This is an alpha feature and may change in the future.',
    required: ['key', 'values'],
  })
  .openapi('IoK8sApiCoreV1TopologySelectorLabelRequirement')

const IoK8sApiCoreV1TopologySelectorTermSchema = z
  .object({
    matchLabelExpressions: z
      .array(IoK8sApiCoreV1TopologySelectorLabelRequirementSchema)
      .exactOptional()
      .openapi({
        description:
          'matchLabelExpressions is a list of topology selector requirements by labels. Usage: Fields of type []TopologySelectorTerm must be listType=atomic. A list of topology selector requirements by labels.',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description:
      'A topology selector term represents the result of label queries. A null or empty topology selector term matches no objects. The requirements of them are ANDed. It provides a subset of functionality as NodeSelectorTerm. This is an alpha feature and may change in the future.',
    'x-kubernetes-map-type': 'atomic',
    required: [],
  })
  .openapi('IoK8sApiCoreV1TopologySelectorTerm')

const IoK8sApimachineryPkgApisMetaV1TimeSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.',
  })
  .openapi('IoK8sApimachineryPkgApisMetaV1Time')

const IoK8sApimachineryPkgApisMetaV1FieldsV1Schema = z
  .object({})
  .openapi({
    description:
      "FieldsV1 stores a set of fields in a data structure like a Trie, in JSON format.\n\nEach key is either a '.' representing the field itself, and will always map to an empty set, or a string representing a sub-field or item. The string will follow one of these four formats: 'f:<name>', where <name> is the name of a field in a struct, or key in a map 'v:<value>', where <value> is the exact json formatted value of a list item 'i:<index>', where <index> is position of a item in a list 'k:<keys>', where <keys> is a map of  a list item's key fields to their unique values If a key maps to an empty Fields value, the field that key represents is part of the set.\n\nThe exact format is defined in sigs.k8s.io/structured-merge-diff",
  })
  .openapi('IoK8sApimachineryPkgApisMetaV1FieldsV1')

const IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntrySchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.',
      }),
    fieldsType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: "FieldsV1"',
      }),
    fieldsV1: IoK8sApimachineryPkgApisMetaV1FieldsV1Schema.exactOptional().openapi({
      description:
        'FieldsV1 holds the first JSON version format as described in the "FieldsV1" type.',
    }),
    manager: z
      .string()
      .exactOptional()
      .openapi({ description: 'Manager is an identifier of the workflow managing these fields.' }),
    operation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'.",
      }),
    subresource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource.',
      }),
    time: IoK8sApimachineryPkgApisMetaV1TimeSchema.exactOptional().openapi({
      description:
        'Time is the timestamp of when the ManagedFields entry was added. The timestamp will also be updated if a field is added, the manager changes any of the owned fields value or removes a field. The timestamp does not update when a field is removed from the entry because another manager took it over.',
    }),
  })
  .openapi({
    description:
      'ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to.',
    required: [],
  })
  .openapi('IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry')

const IoK8sApimachineryPkgApisMetaV1OwnerReferenceSchema = z
  .object({
    apiVersion: z.string().default('').openapi({ description: 'API version of the referent.' }),
    blockOwnerDeletion: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. See https://kubernetes.io/docs/concepts/architecture/garbage-collection/#foreground-deletion for how the garbage collector interacts with this field and enforces the foreground deletion. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.',
      }),
    controller: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, this reference points to the managing controller.' }),
    kind: z
      .string()
      .default('')
      .openapi({
        description:
          'Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
      }),
    name: z
      .string()
      .default('')
      .openapi({
        description:
          'Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names',
      }),
    uid: z
      .string()
      .default('')
      .openapi({
        description:
          'UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids',
      }),
  })
  .openapi({
    description:
      'OwnerReference contains enough information to let you identify an owning object. An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field.',
    required: ['apiVersion', 'kind', 'name', 'uid'],
    'x-kubernetes-map-type': 'atomic',
  })
  .openapi('IoK8sApimachineryPkgApisMetaV1OwnerReference')

const IoK8sApimachineryPkgApisMetaV1ObjectMetaSchema = z
  .object({
    annotations: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations',
      }),
    creationTimestamp: IoK8sApimachineryPkgApisMetaV1TimeSchema.exactOptional().openapi({
      description:
        'CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.\n\nPopulated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata',
    }),
    deletionGracePeriodSeconds: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.',
      }),
    deletionTimestamp: IoK8sApimachineryPkgApisMetaV1TimeSchema.exactOptional().openapi({
      description:
        'DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.\n\nPopulated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata',
    }),
    finalizers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.',
        'x-kubernetes-list-type': 'set',
        'x-kubernetes-patch-strategy': 'merge',
      }),
    generateName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.\n\nIf this field is specified and the generated name exists, the server will return a 409.\n\nApplied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency',
      }),
    generation: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels',
      }),
    managedFields: z
      .array(IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntrySchema)
      .exactOptional()
      .openapi({
        description:
          "ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like \"ci-cd\". The set of fields is always in the version that the workflow used when modifying the object.",
        'x-kubernetes-list-type': 'atomic',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names',
      }),
    namespace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.\n\nMust be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces',
      }),
    ownerReferences: z
      .array(IoK8sApimachineryPkgApisMetaV1OwnerReferenceSchema)
      .exactOptional()
      .openapi({
        description:
          'List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.',
        'x-kubernetes-list-map-keys': ['uid'],
        'x-kubernetes-list-type': 'map',
        'x-kubernetes-patch-merge-key': 'uid',
        'x-kubernetes-patch-strategy': 'merge',
      }),
    resourceVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.\n\nPopulated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency',
      }),
    selfLink: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.',
      }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.\n\nPopulated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids',
      }),
  })
  .openapi({
    description:
      'ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.',
    required: [],
  })
  .openapi('IoK8sApimachineryPkgApisMetaV1ObjectMeta')

const IoK8sApiStorageV1TokenRequestSchema = z
  .object({
    audience: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        description:
          'audience is the intended audience of the token in "TokenRequestSpec". It will default to the audiences of kube apiserver.',
      }),
    expirationSeconds: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'expirationSeconds is the duration of validity of the token in "TokenRequestSpec". It has the same default value of "ExpirationSeconds" in "TokenRequestSpec".',
      }),
  })
  .openapi({
    description: 'TokenRequest contains parameters of a service account token.',
    required: [],
  })
  .openapi('IoK8sApiStorageV1TokenRequest')

const IoK8sApiStorageV1CSIDriverSpecSchema = z
  .object({
    attachRequired: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'attachRequired indicates this CSI volume driver requires an attach operation (because it implements the CSI ControllerPublishVolume() method), and that the Kubernetes attach detach controller should call the attach volume interface which checks the volumeattachment status and waits until the volume is attached before proceeding to mounting. The CSI external-attacher coordinates with CSI volume driver and updates the volumeattachment status when the attach operation is complete. If the value is specified to false, the attach operation will be skipped. Otherwise the attach operation will be called.\n\nThis field is immutable.',
      }),
    fsGroupPolicy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "fsGroupPolicy defines if the underlying volume supports changing ownership and permission of the volume before being mounted. Refer to the specific FSGroupPolicy values for additional details.\n\nThis field was immutable in Kubernetes < 1.29 and now is mutable.\n\nDefaults to ReadWriteOnceWithFSType, which will examine each volume to determine if Kubernetes should modify ownership and permissions of the volume. With the default policy the defined fsGroup will only be applied if a fstype is defined and the volume's access mode contains ReadWriteOnce.",
      }),
    nodeAllocatableUpdatePeriodSeconds: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'nodeAllocatableUpdatePeriodSeconds specifies the interval between periodic updates of the CSINode allocatable capacity for this driver. When set, both periodic updates and updates triggered by capacity-related failures are enabled. If not set, no updates occur (neither periodic nor upon detecting capacity-related failures), and the allocatable.count remains static. The minimum allowed value for this field is 10 seconds.\n\nThis feature requires the MutableCSINodeAllocatableCount feature gate to be enabled.\n\nThis field is mutable.',
      }),
    podInfoOnMount: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'podInfoOnMount indicates this CSI volume driver requires additional pod information (like podName, podUID, etc.) during mount operations, if set to true. If set to false, pod information will not be passed on mount. Default is false.\n\nThe CSI driver specifies podInfoOnMount as part of driver deployment. If true, Kubelet will pass pod information as VolumeContext in the CSI NodePublishVolume() calls. The CSI driver is responsible for parsing and validating the information passed in as VolumeContext.\n\nThe following VolumeContext will be passed if podInfoOnMount is set to true. This list might grow, but the prefix will be used. "csi.storage.k8s.io/pod.name": pod.Name "csi.storage.k8s.io/pod.namespace": pod.Namespace "csi.storage.k8s.io/pod.uid": string(pod.UID) "csi.storage.k8s.io/ephemeral": "true" if the volume is an ephemeral inline volume\n                                defined by a CSIVolumeSource, otherwise "false"\n\n"csi.storage.k8s.io/ephemeral" is a new feature in Kubernetes 1.16. It is only required for drivers which support both the "Persistent" and "Ephemeral" VolumeLifecycleMode. Other drivers can leave pod info disabled and/or ignore this field. As Kubernetes 1.15 doesn\'t support this field, drivers can only support one mode when deployed on such a cluster and the deployment determines which mode that is, for example via a command line parameter of the driver.\n\nThis field was immutable in Kubernetes < 1.29 and now is mutable.',
      }),
    preventPodSchedulingIfMissing: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'preventPodSchedulingIfMissing indicates that the CSI driver wants to prevent pod scheduling if the CSI driver on the node is missing.\n\nEnabling this option will prevent the scheduler (or any other component which embeds default scheduler such as cluster-autoscaler) from scheduling pods to nodes where CSI driver is not installed.\n\nFor components(such as cluster-autoscaler) that embed the scheduler and run pod placement simulations using scheduler plugins, they MUST be aware of CSI driver registration information via CSINode object. They must create simulated CSINode objects in addition to Node objects during scheduling simulation, otherwise if PreventPodSchedulingIfMissing is enabled globally for CSIDriver object, any newly created node may be rejected by the scheduler because of missing CSI driver information from the node.\n\nThis is a beta feature and requires the VolumeLimitScaling feature gate to be enabled. Default is "false".',
      }),
    requiresRepublish: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'requiresRepublish indicates the CSI driver wants `NodePublishVolume` being periodically called to reflect any possible change in the mounted volume. This field defaults to false.\n\nNote: After a successful initial NodePublishVolume call, subsequent calls to NodePublishVolume should only update the contents of the volume. New mount points will not be seen by a running container.',
      }),
    seLinuxMount: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'seLinuxMount specifies if the CSI driver supports "-o context" mount option.\n\nWhen "true", the CSI driver must ensure that all volumes provided by this CSI driver can be mounted separately with different `-o context` options. This is typical for storage backends that provide volumes as filesystems on block devices or as independent shared volumes. Kubernetes will call NodeStage / NodePublish with "-o context=xyz" mount option when mounting a ReadWriteOncePod volume used in Pod that has explicitly set SELinux context. In the future, it may be expanded to other volume AccessModes. In any case, Kubernetes will ensure that the volume is mounted only with a single SELinux context.\n\nWhen "false", Kubernetes won\'t pass any special SELinux mount options to the driver. This is typical for volumes that represent subdirectories of a bigger shared filesystem.\n\nDefault is "false".',
      }),
    serviceAccountTokenInSecrets: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'serviceAccountTokenInSecrets is an opt-in for CSI drivers to indicate that service account tokens should be passed via the Secrets field in NodePublishVolumeRequest instead of the VolumeContext field. The CSI specification provides a dedicated Secrets field for sensitive information like tokens, which is the appropriate mechanism for handling credentials. This addresses security concerns where sensitive tokens were being logged as part of volume context.\n\nWhen "true", kubelet will pass the tokens only in the Secrets field with the key "csi.storage.k8s.io/serviceAccount.tokens". The CSI driver must be updated to read tokens from the Secrets field instead of VolumeContext.\n\nWhen "false" or not set, kubelet will pass the tokens in VolumeContext with the key "csi.storage.k8s.io/serviceAccount.tokens" (existing behavior). This maintains backward compatibility with existing CSI drivers.\n\nThis field can only be set when TokenRequests is configured. The API server will reject CSIDriver specs that set this field without TokenRequests.\n\nDefault behavior if unset is to pass tokens in the VolumeContext field.',
      }),
    storageCapacity: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'storageCapacity indicates that the CSI volume driver wants pod scheduling to consider the storage capacity that the driver deployment will report by creating CSIStorageCapacity objects with capacity information, if set to true.\n\nThe check can be enabled immediately when deploying a driver. In that case, provisioning new volumes with late binding will pause until the driver deployment has published some suitable CSIStorageCapacity object.\n\nAlternatively, the driver can be deployed with the field unset or false and it can be flipped later when storage capacity information has been published.\n\nThis field was immutable in Kubernetes <= 1.22 and now is mutable.',
      }),
    tokenRequests: z
      .array(IoK8sApiStorageV1TokenRequestSchema)
      .exactOptional()
      .openapi({
        description:
          'tokenRequests indicates the CSI driver needs pods\' service account tokens it is mounting volume for to do necessary authentication. Kubelet will pass the tokens in VolumeContext in the CSI NodePublishVolume calls. The CSI driver should parse and validate the following VolumeContext: "csi.storage.k8s.io/serviceAccount.tokens": {\n  "<audience>": {\n    "token": <token>,\n    "expirationTimestamp": <expiration timestamp in RFC3339>,\n  },\n  ...\n}\n\nNote: Audience in each TokenRequest should be different and at most one token is empty string. To receive a new token after expiry, RequiresRepublish can be used to trigger NodePublishVolume periodically.',
        'x-kubernetes-list-type': 'atomic',
      }),
    volumeLifecycleModes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'volumeLifecycleModes defines what kind of volumes this CSI volume driver supports. The default if the list is empty is "Persistent", which is the usage defined by the CSI specification and implemented in Kubernetes via the usual PV/PVC mechanism.\n\nThe other mode is "Ephemeral". In this mode, volumes are defined inline inside the pod spec with CSIVolumeSource and their lifecycle is tied to the lifecycle of that pod. A driver has to be aware of this because it is only going to get a NodePublishVolume call for such a volume.\n\nFor more information about implementing this mode, see https://kubernetes-csi.github.io/docs/ephemeral-local-volumes.html A driver can support one or more of these modes and more modes may be added in the future.\n\nThis field is beta. This field is immutable.',
        'x-kubernetes-list-type': 'set',
      }),
  })
  .openapi({ description: 'CSIDriverSpec is the specification of a CSIDriver.', required: [] })
  .openapi('IoK8sApiStorageV1CSIDriverSpec')

const IoK8sApiStorageV1CSIDriverSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
      }),
    metadata: IoK8sApimachineryPkgApisMetaV1ObjectMetaSchema.default({})
      .exactOptional()
      .openapi({
        description:
          'metadata is the standard object metadata. metadata.Name indicates the name of the CSI driver that this object refers to; it MUST be the same name returned by the CSI GetPluginName() call for that driver. The driver name must be 63 characters or less, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), dots (.), and alphanumerics between. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata',
      }),
    spec: IoK8sApiStorageV1CSIDriverSpecSchema.default({})
      .exactOptional()
      .openapi({ description: 'spec represents the specification of the CSI Driver.' }),
  })
  .openapi({
    description:
      'CSIDriver captures information about a Container Storage Interface (CSI) volume driver deployed on the cluster. Kubernetes attach detach controller uses this object to determine whether attach is required. Kubelet uses this object to determine whether pod information needs to be passed on mount. CSIDriver objects are non-namespaced.',
    'x-kubernetes-group-version-kind': [
      { group: 'storage.k8s.io', kind: 'CSIDriver', version: 'v1' },
    ],
    required: [],
  })
  .openapi('IoK8sApiStorageV1CSIDriver')

const IoK8sApimachineryPkgApisMetaV1ShardInfoSchema = z
  .object({
    selector: z
      .string()
      .default('')
      .openapi({
        description:
          'selector is the shard selector string from the request, echoed back so clients can verify which shard they received and merge responses from multiple shards.',
      }),
  })
  .openapi({
    description:
      'ShardInfo describes the shard selector that was applied to produce a list response. Its presence on a list response indicates the list is a filtered subset.',
    required: ['selector'],
  })
  .openapi('IoK8sApimachineryPkgApisMetaV1ShardInfo')

const IoK8sApimachineryPkgApisMetaV1ListMetaSchema = z
  .object({
    continue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'continue may be set if the user set a limit on the number of items returned, and indicates that the server has more data available. The value is opaque and may be used to issue another request to the endpoint that served this list to retrieve the next set of available objects. Continuing a consistent list may not be possible if the server configuration has changed or more than a few minutes have passed. The resourceVersion field returned when using this continue value will be identical to the value in the first response, unless you have received this token from an error message.',
      }),
    remainingItemCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'remainingItemCount is the number of subsequent items in the list which are not included in this list response. If the list request contained label or field selectors, then the number of remaining items is unknown and the field will be left unset and omitted during serialization. If the list is complete (either because it is not chunking or because this is the last chunk), then there are no more remaining items and this field will be left unset and omitted during serialization. Servers older than v1.15 do not set this field. The intended use of the remainingItemCount is *estimating* the size of a collection. Clients should not rely on the remainingItemCount to be set or to be exact.',
      }),
    resourceVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "String that identifies the server's internal version of this object that can be used by clients to determine when objects have changed. Value must be treated as opaque by clients and passed unmodified back to the server. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency",
      }),
    selfLink: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.',
      }),
    shardInfo: IoK8sApimachineryPkgApisMetaV1ShardInfoSchema.exactOptional().openapi({
      description:
        'shardInfo is set when the list is a filtered subset of the full collection, as selected by a shard selector on the request. It echoes back the selector so clients can verify which shard they received and merge sharded responses. Clients should not cache sharded list responses as a full representation of the collection.\n\nThis is a beta field and is enabled by default via the ShardedListAndWatch feature gate.',
    }),
  })
  .openapi({
    description:
      'ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.',
    required: [],
  })
  .openapi('IoK8sApimachineryPkgApisMetaV1ListMeta')

const IoK8sApiStorageV1CSIDriverListSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources',
      }),
    items: z
      .array(IoK8sApiStorageV1CSIDriverSchema)
      .openapi({ description: 'items is the list of CSIDriver' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
      }),
    metadata: IoK8sApimachineryPkgApisMetaV1ListMetaSchema.default({})
      .exactOptional()
      .openapi({
        description:
          'Standard list metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata',
      }),
  })
  .openapi({
    description: 'CSIDriverList is a collection of CSIDriver objects.',
    required: ['items'],
    'x-kubernetes-group-version-kind': [
      { group: 'storage.k8s.io', kind: 'CSIDriverList', version: 'v1' },
    ],
  })
  .openapi('IoK8sApiStorageV1CSIDriverList')

const IoK8sApiStorageV1VolumeNodeResourcesSchema = z
  .object({
    count: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'count indicates the maximum number of unique volumes managed by the CSI driver that can be used on a node. A volume that is both attached and mounted on a node is considered to be used once, not twice. The same rule applies for a unique volume that is shared among multiple pods on the same node. If this field is not specified, then the supported number of volumes on this node is unbounded.',
      }),
  })
  .openapi({
    description: 'VolumeNodeResources is a set of resource limits for scheduling of volumes.',
    required: [],
  })
  .openapi('IoK8sApiStorageV1VolumeNodeResources')

const IoK8sApiStorageV1CSINodeDriverSchema = z
  .object({
    allocatable: IoK8sApiStorageV1VolumeNodeResourcesSchema.exactOptional().openapi({
      description:
        'allocatable represents the volume resources of a node that are available for scheduling. This field is beta.',
    }),
    name: z
      .string()
      .default('')
      .openapi({
        description:
          'name represents the name of the CSI driver that this object refers to. This MUST be the same name returned by the CSI GetPluginName() call for that driver.',
      }),
    nodeID: z
      .string()
      .default('')
      .openapi({
        description:
          'nodeID of the node from the driver point of view. This field enables Kubernetes to communicate with storage systems that do not share the same nomenclature for nodes. For example, Kubernetes may refer to a given node as "node1", but the storage system may refer to the same node as "nodeA". When Kubernetes issues a command to the storage system to attach a volume to a specific node, it can use this field to refer to the node name using the ID that the storage system will understand, e.g. "nodeA" instead of "node1". This field is required.',
      }),
    topologyKeys: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'topologyKeys is the list of keys supported by the driver. When a driver is initialized on a cluster, it provides a set of topology keys that it understands (e.g. "company.com/zone", "company.com/region"). When a driver is initialized on a node, it provides the same topology keys along with values. Kubelet will expose these topology keys as labels on its own node object. When Kubernetes does topology aware provisioning, it can use this list to determine which labels it should retrieve from the node object and pass back to the driver. It is possible for different nodes to use different topology keys. This can be empty if driver does not support topology.',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description:
      'CSINodeDriver holds information about the specification of one CSI driver installed on a node',
    required: ['name', 'nodeID'],
  })
  .openapi('IoK8sApiStorageV1CSINodeDriver')

const IoK8sApiStorageV1CSINodeSpecSchema = z
  .object({
    drivers: z
      .array(IoK8sApiStorageV1CSINodeDriverSchema)
      .exactOptional()
      .openapi({
        description:
          'drivers is a list of information of all CSI Drivers existing on a node. If all drivers in the list are uninstalled, this can become empty.',
        'x-kubernetes-list-map-keys': ['name'],
        'x-kubernetes-list-type': 'map',
        'x-kubernetes-patch-merge-key': 'name',
        'x-kubernetes-patch-strategy': 'merge',
      }),
  })
  .openapi({
    description:
      'CSINodeSpec holds information about the specification of all CSI drivers installed on a node',
    required: [],
  })
  .openapi('IoK8sApiStorageV1CSINodeSpec')

const IoK8sApiStorageV1StorageHealthConditionSchema = z
  .object({
    accessMode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'accessMode is the access mode affected. Nil means all access modes are affected.',
      }),
    lastTransitionTime: IoK8sApimachineryPkgApisMetaV1TimeSchema.exactOptional().openapi({
      description: 'lastTransitionTime is when this condition first appeared at its current state.',
    }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'message is a human-readable description. Maximum permitted length of a message is 1024 bytes.',
      }),
    reason: z
      .string()
      .default('')
      .openapi({
        description:
          'reason is a brief CamelCase machine-parseable reason. Maximum permitted length of a reason is 256 bytes.',
      }),
    status: z
      .string()
      .default('')
      .openapi({
        description:
          'status is the health status category. One of "StorageUnreachable", "StorageDegraded".',
      }),
    volumeMode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'volumeMode is the volume mode affected. Nil means both are affected.',
      }),
  })
  .openapi({
    description:
      'StorageHealthCondition represents an adverse health condition reported by a CSI driver for its storage backend on a node.',
    required: ['status', 'reason'],
  })
  .openapi('IoK8sApiStorageV1StorageHealthCondition')

const IoK8sApiStorageV1StorageHealthSchema = z
  .object({
    healthConditions: z
      .array(IoK8sApiStorageV1StorageHealthConditionSchema)
      .exactOptional()
      .openapi({
        description:
          'healthConditions are the adverse storage backend conditions reported by the CSI driver. At most 16 conditions may be reported.',
        'x-kubernetes-list-type': 'atomic',
      }),
    name: z
      .string()
      .default('')
      .openapi({ description: 'name is the CSI driver name, matching CSINodeDriver.name.' }),
  })
  .openapi({
    description:
      'StorageHealth contains storage backend health reported by a CSI driver on a node.',
    required: ['name'],
  })
  .openapi('IoK8sApiStorageV1StorageHealth')

const IoK8sApiStorageV1CSINodeStatusSchema = z
  .object({
    storageHealth: z
      .array(IoK8sApiStorageV1StorageHealthSchema)
      .exactOptional()
      .openapi({
        description:
          'storageHealth contains backend health reports for CSI drivers registered on the node.',
        'x-kubernetes-list-map-keys': ['name'],
        'x-kubernetes-list-type': 'map',
        'x-kubernetes-patch-merge-key': 'name',
        'x-kubernetes-patch-strategy': 'merge',
      }),
  })
  .openapi({
    description: 'CSINodeStatus contains health and status information for storage on a node.',
    required: [],
  })
  .openapi('IoK8sApiStorageV1CSINodeStatus')

const IoK8sApiStorageV1CSINodeSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
      }),
    metadata: IoK8sApimachineryPkgApisMetaV1ObjectMetaSchema.default({})
      .exactOptional()
      .openapi({
        description:
          'metadata is the standard object metadata. metadata.name must be the Kubernetes node name.',
      }),
    spec: IoK8sApiStorageV1CSINodeSpecSchema.default({})
      .exactOptional()
      .openapi({ description: 'spec is the specification of CSINode' }),
    status: IoK8sApiStorageV1CSINodeStatusSchema.default({})
      .exactOptional()
      .openapi({
        description: "status contains health and status information for the node's storage.",
      }),
  })
  .openapi({
    description:
      "CSINode holds information about all CSI drivers installed on a node. CSI drivers do not need to create the CSINode object directly. As long as they use the node-driver-registrar sidecar container, the kubelet will automatically populate the CSINode object for the CSI driver as part of kubelet plugin registration. CSINode has the same name as a node. If the object is missing, it means either there are no CSI Drivers available on the node, or the Kubelet version is low enough that it doesn't create this object. CSINode has an OwnerReference that points to the corresponding node object.",
    'x-kubernetes-group-version-kind': [
      { group: 'storage.k8s.io', kind: 'CSINode', version: 'v1' },
    ],
    required: [],
  })
  .openapi('IoK8sApiStorageV1CSINode')

const IoK8sApiStorageV1CSINodeListSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources',
      }),
    items: z
      .array(IoK8sApiStorageV1CSINodeSchema)
      .openapi({ description: 'items is the list of CSINode' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
      }),
    metadata: IoK8sApimachineryPkgApisMetaV1ListMetaSchema.default({})
      .exactOptional()
      .openapi({
        description:
          'Standard list metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata',
      }),
  })
  .openapi({
    description: 'CSINodeList is a collection of CSINode objects.',
    required: ['items'],
    'x-kubernetes-group-version-kind': [
      { group: 'storage.k8s.io', kind: 'CSINodeList', version: 'v1' },
    ],
  })
  .openapi('IoK8sApiStorageV1CSINodeList')

const IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirementSchema = z
  .object({
    key: z
      .string()
      .default('')
      .openapi({ description: 'key is the label key that the selector applies to.' }),
    operator: z
      .string()
      .default('')
      .openapi({
        description:
          "operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.",
      }),
    values: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description:
      'A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.',
    required: ['key', 'operator'],
  })
  .openapi('IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement')

const IoK8sApimachineryPkgApisMetaV1LabelSelectorSchema = z
  .object({
    matchExpressions: z
      .array(IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirementSchema)
      .exactOptional()
      .openapi({
        description:
          'matchExpressions is a list of label selector requirements. The requirements are ANDed.',
        'x-kubernetes-list-type': 'atomic',
      }),
    matchLabels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.',
      }),
  })
  .openapi({
    description:
      'A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.',
    'x-kubernetes-map-type': 'atomic',
    required: [],
  })
  .openapi('IoK8sApimachineryPkgApisMetaV1LabelSelector')

const IoK8sApiStorageV1CSIStorageCapacitySchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources',
      }),
    capacity: IoK8sApimachineryPkgApiResourceQuantitySchema.exactOptional().openapi({
      description:
        'capacity is the value reported by the CSI driver in its GetCapacityResponse for a GetCapacityRequest with topology and parameters that match the previous fields.\n\nThe semantic is currently (CSI spec 1.2) defined as: The available capacity, in bytes, of the storage that can be used to provision volumes. If not set, that information is currently unavailable.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
      }),
    maximumVolumeSize: IoK8sApimachineryPkgApiResourceQuantitySchema.exactOptional().openapi({
      description:
        'maximumVolumeSize is the value reported by the CSI driver in its GetCapacityResponse for a GetCapacityRequest with topology and parameters that match the previous fields.\n\nThis is defined since CSI spec 1.4.0 as the largest size that may be used in a CreateVolumeRequest.capacity_range.required_bytes field to create a volume with the same parameters as those in GetCapacityRequest. The corresponding value in the Kubernetes API is ResourceRequirements.Requests in a volume claim.',
    }),
    metadata: IoK8sApimachineryPkgApisMetaV1ObjectMetaSchema.default({})
      .exactOptional()
      .openapi({
        description:
          'metadata is the standard object metadata. The name has no particular meaning. It must be a DNS subdomain (dots allowed, 253 characters). To ensure that there are no conflicts with other CSI drivers on the cluster, the recommendation is to use csisc-<uuid>, a generated name, or a reverse-domain name which ends with the unique CSI driver name.\n\nObjects are namespaced.\n\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata',
      }),
    nodeTopology: IoK8sApimachineryPkgApisMetaV1LabelSelectorSchema.exactOptional().openapi({
      description:
        'nodeTopology defines which nodes have access to the storage for which capacity was reported. If not set, the storage is not accessible from any node in the cluster. If empty, the storage is accessible from all nodes. This field is immutable.',
    }),
    storageClassName: z
      .string()
      .default('')
      .openapi({
        description:
          'storageClassName represents the name of the StorageClass that the reported capacity applies to. It must meet the same requirements as the name of a StorageClass object (non-empty, DNS subdomain). If that object no longer exists, the CSIStorageCapacity object is obsolete and should be removed by its creator. This field is immutable.',
      }),
  })
  .openapi({
    description:
      'CSIStorageCapacity stores the result of one CSI GetCapacity call. For a given StorageClass, this describes the available capacity in a particular topology segment.  This can be used when considering where to instantiate new PersistentVolumes.\n\nFor example this can express things like: - StorageClass "standard" has "1234 GiB" available in "topology.kubernetes.io/zone=us-east1" - StorageClass "localssd" has "10 GiB" available in "kubernetes.io/hostname=knode-abc123"\n\nThe following three cases all imply that no capacity is available for a certain combination: - no object exists with suitable topology and storage class name - such an object exists, but the capacity is unset - such an object exists, but the capacity is zero\n\nThe producer of these objects can decide which approach is more suitable.\n\nThey are consumed by the kube-scheduler when a CSI driver opts into capacity-aware scheduling with CSIDriverSpec.StorageCapacity. The scheduler compares the MaximumVolumeSize against the requested size of pending volumes to filter out unsuitable nodes. If MaximumVolumeSize is unset, it falls back to a comparison against the less precise Capacity. If that is also unset, the scheduler assumes that capacity is insufficient and tries some other node.',
    required: ['storageClassName'],
    'x-kubernetes-group-version-kind': [
      { group: 'storage.k8s.io', kind: 'CSIStorageCapacity', version: 'v1' },
    ],
  })
  .openapi('IoK8sApiStorageV1CSIStorageCapacity')

const IoK8sApiStorageV1CSIStorageCapacityListSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources',
      }),
    items: z
      .array(IoK8sApiStorageV1CSIStorageCapacitySchema)
      .openapi({ description: 'items is the list of CSIStorageCapacity objects.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
      }),
    metadata: IoK8sApimachineryPkgApisMetaV1ListMetaSchema.default({})
      .exactOptional()
      .openapi({
        description:
          'Standard list metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata',
      }),
  })
  .openapi({
    description: 'CSIStorageCapacityList is a collection of CSIStorageCapacity objects.',
    required: ['items'],
    'x-kubernetes-group-version-kind': [
      { group: 'storage.k8s.io', kind: 'CSIStorageCapacityList', version: 'v1' },
    ],
  })
  .openapi('IoK8sApiStorageV1CSIStorageCapacityList')

const IoK8sApiStorageV1StorageClassSchema = z
  .object({
    allowVolumeExpansion: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'allowVolumeExpansion shows whether the storage class allow volume expand.',
      }),
    allowedTopologies: z
      .array(IoK8sApiCoreV1TopologySelectorTermSchema)
      .exactOptional()
      .openapi({
        description:
          'allowedTopologies restrict the node topologies where volumes can be dynamically provisioned. Each volume plugin defines its own supported topology specifications. An empty TopologySelectorTerm list means there is no topology restriction. This field is only honored by servers that enable the VolumeScheduling feature.',
        'x-kubernetes-list-type': 'atomic',
      }),
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
      }),
    metadata: IoK8sApimachineryPkgApisMetaV1ObjectMetaSchema.default({})
      .exactOptional()
      .openapi({
        description:
          'metadata is the standard object metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata',
      }),
    mountOptions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'mountOptions controls the mountOptions for dynamically provisioned PersistentVolumes of this storage class. e.g. ["ro", "soft"]. Not validated - mount of the PVs will simply fail if one is invalid.',
        'x-kubernetes-list-type': 'atomic',
      }),
    parameters: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'parameters holds the parameters for the provisioner that should create volumes of this storage class.',
      }),
    provisioner: z
      .string()
      .default('')
      .openapi({ description: 'provisioner indicates the type of the provisioner.' }),
    reclaimPolicy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'reclaimPolicy controls the reclaimPolicy for dynamically provisioned PersistentVolumes of this storage class. Defaults to Delete.',
      }),
    volumeBindingMode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'volumeBindingMode indicates how PersistentVolumeClaims should be provisioned and bound.  When unset, VolumeBindingImmediate is used. This field is only honored by servers that enable the VolumeScheduling feature.',
      }),
  })
  .openapi({
    description:
      'StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.\n\nStorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name.',
    required: ['provisioner'],
    'x-kubernetes-group-version-kind': [
      { group: 'storage.k8s.io', kind: 'StorageClass', version: 'v1' },
    ],
  })
  .openapi('IoK8sApiStorageV1StorageClass')

const IoK8sApiStorageV1StorageClassListSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources',
      }),
    items: z
      .array(IoK8sApiStorageV1StorageClassSchema)
      .openapi({ description: 'items is the list of StorageClasses' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
      }),
    metadata: IoK8sApimachineryPkgApisMetaV1ListMetaSchema.default({})
      .exactOptional()
      .openapi({
        description:
          'Standard list metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata',
      }),
  })
  .openapi({
    description: 'StorageClassList is a collection of storage classes.',
    required: ['items'],
    'x-kubernetes-group-version-kind': [
      { group: 'storage.k8s.io', kind: 'StorageClassList', version: 'v1' },
    ],
  })
  .openapi('IoK8sApiStorageV1StorageClassList')

const IoK8sApiStorageV1VolumeAttachmentSourceSchema = z
  .object({
    inlineVolumeSpec: IoK8sApiCoreV1PersistentVolumeSpecSchema.exactOptional().openapi({
      description:
        "inlineVolumeSpec contains all the information necessary to attach a persistent volume defined by a pod's inline VolumeSource. This field is populated only for the CSIMigration feature. It contains translated fields from a pod's inline VolumeSource to a PersistentVolumeSpec. This field is beta-level and is only honored by servers that enabled the CSIMigration feature.",
    }),
    persistentVolumeName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'persistentVolumeName represents the name of the persistent volume to attach.',
      }),
  })
  .openapi({
    description:
      'VolumeAttachmentSource represents a volume that should be attached. Right now only PersistentVolumes can be attached via external attacher, in the future we may allow also inline volumes in pods. Exactly one member can be set.',
    required: [],
  })
  .openapi('IoK8sApiStorageV1VolumeAttachmentSource')

const IoK8sApiStorageV1VolumeAttachmentSpecSchema = z
  .object({
    attacher: z
      .string()
      .default('')
      .openapi({
        description:
          'attacher indicates the name of the volume driver that MUST handle this request. This is the name returned by GetPluginName().',
      }),
    nodeName: z
      .string()
      .default('')
      .openapi({
        description: 'nodeName represents the node that the volume should be attached to.',
      }),
    source: IoK8sApiStorageV1VolumeAttachmentSourceSchema.default({}).openapi({
      description: 'source represents the volume that should be attached.',
    }),
  })
  .openapi({
    description: 'VolumeAttachmentSpec is the specification of a VolumeAttachment request.',
    required: ['attacher', 'source', 'nodeName'],
  })
  .openapi('IoK8sApiStorageV1VolumeAttachmentSpec')

const IoK8sApiStorageV1VolumeErrorSchema = z
  .object({
    errorCode: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'errorCode is a numeric gRPC code representing the error encountered during Attach or Detach operations.\n\nThis field requires the MutableCSINodeAllocatableCount feature gate being enabled to be set.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'message represents the error encountered during Attach or Detach operation. This string may be logged, so it should not contain sensitive information.',
      }),
    time: IoK8sApimachineryPkgApisMetaV1TimeSchema.exactOptional().openapi({
      description: 'time represents the time the error was encountered.',
    }),
  })
  .openapi({
    description: 'VolumeError captures an error encountered during a volume operation.',
    required: [],
  })
  .openapi('IoK8sApiStorageV1VolumeError')

const IoK8sApiStorageV1VolumeAttachmentStatusSchema = z
  .object({
    attachError: IoK8sApiStorageV1VolumeErrorSchema.exactOptional().openapi({
      description:
        'attachError represents the last error encountered during attach operation, if any. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.',
    }),
    attached: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'attached indicates the volume is successfully attached. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.',
      }),
    attachmentMetadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'attachmentMetadata is populated with any information returned by the attach operation, upon successful attach, that must be passed into subsequent WaitForAttach or Mount calls. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.',
      }),
    detachError: IoK8sApiStorageV1VolumeErrorSchema.exactOptional().openapi({
      description:
        'detachError represents the last error encountered during detach operation, if any. This field must only be set by the entity completing the detach operation, i.e. the external-attacher.',
    }),
  })
  .openapi({
    description: 'VolumeAttachmentStatus is the status of a VolumeAttachment request.',
    required: [],
  })
  .openapi('IoK8sApiStorageV1VolumeAttachmentStatus')

const IoK8sApiStorageV1VolumeAttachmentSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
      }),
    metadata: IoK8sApimachineryPkgApisMetaV1ObjectMetaSchema.default({})
      .exactOptional()
      .openapi({
        description:
          'metadata is the standard object metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata',
      }),
    spec: IoK8sApiStorageV1VolumeAttachmentSpecSchema.default({}).openapi({
      description:
        'spec represents specification of the desired attach/detach volume behavior. Populated by the Kubernetes system.',
    }),
    status: IoK8sApiStorageV1VolumeAttachmentStatusSchema.default({})
      .exactOptional()
      .openapi({
        description:
          'status represents status of the VolumeAttachment request. Populated by the entity completing the attach or detach operation, i.e. the external-attacher.',
      }),
  })
  .openapi({
    description:
      'VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.\n\nVolumeAttachment objects are non-namespaced.',
    required: ['spec'],
    'x-kubernetes-group-version-kind': [
      { group: 'storage.k8s.io', kind: 'VolumeAttachment', version: 'v1' },
    ],
  })
  .openapi('IoK8sApiStorageV1VolumeAttachment')

const IoK8sApiStorageV1VolumeAttachmentListSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources',
      }),
    items: z
      .array(IoK8sApiStorageV1VolumeAttachmentSchema)
      .openapi({ description: 'items is the list of VolumeAttachments' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
      }),
    metadata: IoK8sApimachineryPkgApisMetaV1ListMetaSchema.default({})
      .exactOptional()
      .openapi({
        description:
          'Standard list metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata',
      }),
  })
  .openapi({
    description: 'VolumeAttachmentList is a collection of VolumeAttachment objects.',
    required: ['items'],
    'x-kubernetes-group-version-kind': [
      { group: 'storage.k8s.io', kind: 'VolumeAttachmentList', version: 'v1' },
    ],
  })
  .openapi('IoK8sApiStorageV1VolumeAttachmentList')

const IoK8sApiStorageV1VolumeAttributesClassSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources',
      }),
    driverName: z
      .string()
      .default('')
      .openapi({
        description: 'driverName is the name of the CSI driver This field is immutable.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
      }),
    metadata: IoK8sApimachineryPkgApisMetaV1ObjectMetaSchema.default({})
      .exactOptional()
      .openapi({
        description:
          'metadata is the standard object metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata',
      }),
    parameters: z
      .record(z.string(), z.string())
      .openapi({
        description:
          'parameters hold volume attributes defined by the CSI driver. These values are opaque to the Kubernetes and are passed directly to the CSI driver. The underlying storage provider supports changing these attributes on an existing volume, however the parameters field itself is immutable. To invoke a volume update, a new VolumeAttributesClass should be created with new parameters, and the PersistentVolumeClaim should be updated to reference the new VolumeAttributesClass.\n\nThis field is required and must contain at least one key/value pair. The keys cannot be empty, and the maximum number of parameters is 512, with a cumulative max size of 256K. If the CSI driver rejects invalid parameters, the target PersistentVolumeClaim will be set to an "Infeasible" state in the modifyVolumeStatus field.',
      }),
  })
  .openapi({
    description:
      'VolumeAttributesClass represents a specification of mutable volume attributes defined by the CSI driver. The class can be specified during dynamic provisioning of PersistentVolumeClaims, and changed in the PersistentVolumeClaim spec after provisioning.',
    required: ['driverName', 'parameters'],
    'x-kubernetes-group-version-kind': [
      { group: 'storage.k8s.io', kind: 'VolumeAttributesClass', version: 'v1' },
    ],
  })
  .openapi('IoK8sApiStorageV1VolumeAttributesClass')

const IoK8sApiStorageV1VolumeAttributesClassListSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources',
      }),
    items: z
      .array(IoK8sApiStorageV1VolumeAttributesClassSchema)
      .openapi({ description: 'items is the list of VolumeAttributesClass objects.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
      }),
    metadata: IoK8sApimachineryPkgApisMetaV1ListMetaSchema.default({})
      .exactOptional()
      .openapi({
        description:
          'Standard list metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata',
      }),
  })
  .openapi({
    description: 'VolumeAttributesClassList is a collection of VolumeAttributesClass objects.',
    required: ['items'],
    'x-kubernetes-group-version-kind': [
      { group: 'storage.k8s.io', kind: 'VolumeAttributesClassList', version: 'v1' },
    ],
  })
  .openapi('IoK8sApiStorageV1VolumeAttributesClassList')

const IoK8sApimachineryPkgApisMetaV1APIResourceSchema = z
  .object({
    categories: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "categories is a list of the grouped resources this resource belongs to (e.g. 'all')",
        'x-kubernetes-list-type': 'atomic',
      }),
    group: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'group is the preferred group of the resource.  Empty implies the group of the containing resource list. For subresources, this may have a different value, for example: Scale".',
      }),
    kind: z
      .string()
      .default('')
      .openapi({
        description:
          "kind is the kind for the resource (e.g. 'Foo' is the kind for a resource 'foo')",
      }),
    name: z
      .string()
      .default('')
      .openapi({ description: 'name is the plural name of the resource.' }),
    namespaced: z
      .boolean()
      .default(false)
      .openapi({ description: 'namespaced indicates if a resource is namespaced or not.' }),
    shortNames: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'shortNames is a list of suggested short names of the resource.',
        'x-kubernetes-list-type': 'atomic',
      }),
    singularName: z
      .string()
      .default('')
      .openapi({
        description:
          'singularName is the singular name of the resource.  This allows clients to handle plural and singular opaquely. The singularName is more correct for reporting status on a single item and both singular and plural are allowed from the kubectl CLI interface.',
      }),
    storageVersionHash: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The hash value of the storage version, the version this resource is converted to when written to the data store. Value must be treated as opaque by clients. Only equality comparison on the value is valid. This is an alpha feature and may change or be removed in the future. The field is populated by the apiserver only if the StorageVersionHash feature gate is enabled. This field will remain optional even if it graduates.',
      }),
    verbs: z
      .array(z.string())
      .openapi({
        description:
          'verbs is a list of supported kube verbs (this includes get, list, watch, create, update, patch, delete, deletecollection, and proxy)',
      }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'version is the preferred version of the resource.  Empty implies the version of the containing resource list For subresources, this may have a different value, for example: v1 (while inside a v1beta1 version of the core resource\'s group)".',
      }),
  })
  .openapi({
    description: 'APIResource specifies the name of a resource and whether it is namespaced.',
    required: ['name', 'singularName', 'namespaced', 'kind', 'verbs'],
  })
  .openapi('IoK8sApimachineryPkgApisMetaV1APIResource')

const IoK8sApimachineryPkgApisMetaV1APIResourceListSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources',
      }),
    groupVersion: z
      .string()
      .default('')
      .openapi({
        description: 'groupVersion is the group and version this APIResourceList is for.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
      }),
    resources: z
      .array(IoK8sApimachineryPkgApisMetaV1APIResourceSchema)
      .openapi({
        description: 'resources contains the name of the resources and if they are namespaced.',
        'x-kubernetes-list-type': 'atomic',
      }),
  })
  .openapi({
    description:
      'APIResourceList is a list of APIResource, it is used to expose the name of the resources supported in a specific group and version, and if the resource is namespaced.',
    required: ['groupVersion', 'resources'],
    'x-kubernetes-group-version-kind': [{ group: '', kind: 'APIResourceList', version: 'v1' }],
  })
  .openapi('IoK8sApimachineryPkgApisMetaV1APIResourceList')

const IoK8sApimachineryPkgApisMetaV1PreconditionsSchema = z
  .object({
    resourceVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Specifies the target ResourceVersion' }),
    uid: z.string().exactOptional().openapi({ description: 'Specifies the target UID.' }),
  })
  .openapi({
    description:
      'Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out.',
    required: [],
  })
  .openapi('IoK8sApimachineryPkgApisMetaV1Preconditions')

const IoK8sApimachineryPkgApisMetaV1DeleteOptionsSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources',
      }),
    dryRun: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
        'x-kubernetes-list-type': 'atomic',
      }),
    gracePeriodSeconds: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.',
      }),
    ignoreStoreReadErrorWithClusterBreakingPotential: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
      }),
    orphanDependents: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object\'s finalizers list. Either this field or PropagationPolicy may be set, but not both.',
      }),
    preconditions: IoK8sApimachineryPkgApisMetaV1PreconditionsSchema.exactOptional().openapi({
      description:
        'Must be fulfilled before a deletion is carried out. If not possible, a 409 Conflict status will be returned.',
    }),
    propagationPolicy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.",
      }),
  })
  .openapi({
    description: 'DeleteOptions may be provided when deleting an API object.',
    'x-kubernetes-group-version-kind': [
      { group: '', kind: 'DeleteOptions', version: 'v1' },
      { group: 'storage.k8s.io', kind: 'DeleteOptions', version: 'v1' },
    ],
    required: [],
  })
  .openapi('IoK8sApimachineryPkgApisMetaV1DeleteOptions')

const IoK8sApimachineryPkgApisMetaV1PatchSchema = z
  .object({})
  .openapi({
    description:
      'Patch is provided to give a concrete name and type to the Kubernetes PATCH request body.',
  })
  .openapi('IoK8sApimachineryPkgApisMetaV1Patch')

const IoK8sApimachineryPkgApisMetaV1StatusCauseSchema = z
  .object({
    field: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The field of the resource that has caused this error, as named by its JSON serialization. May include dot and postfix notation for nested attributes. Arrays are zero-indexed.  Fields may appear more than once in an array of causes due to fields having multiple errors. Optional.\n\nExamples:\n  "name" - the field "name" on the current resource\n  "items[0].name" - the field "name" on the first array entry in "items"',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A human-readable description of the cause of the error.  This field may be presented as-is to a reader.',
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A machine-readable description of the cause of the error. If this value is empty there is no information available.',
      }),
  })
  .openapi({
    description:
      'StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered.',
    required: [],
  })
  .openapi('IoK8sApimachineryPkgApisMetaV1StatusCause')

const IoK8sApimachineryPkgApisMetaV1StatusDetailsSchema = z
  .object({
    causes: z
      .array(IoK8sApimachineryPkgApisMetaV1StatusCauseSchema)
      .exactOptional()
      .openapi({
        description:
          'The Causes array includes more details associated with the StatusReason failure. Not all StatusReasons may provide detailed causes.',
        'x-kubernetes-list-type': 'atomic',
      }),
    group: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The group attribute of the resource associated with the status StatusReason.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The kind attribute of the resource associated with the status StatusReason. On some operations may differ from the requested resource Kind. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name attribute of the resource associated with the status StatusReason (when there is a single name which can be described).',
      }),
    retryAfterSeconds: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'If specified, the time in seconds before the operation should be retried. Some errors may indicate the client must take an alternate action - for those errors this field may indicate how long to wait before taking the alternate action.',
      }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'UID of the resource. (when there is a single resource which can be described). More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids',
      }),
  })
  .openapi({
    description:
      'StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined.',
    required: [],
  })
  .openapi('IoK8sApimachineryPkgApisMetaV1StatusDetails')

const IoK8sApimachineryPkgApisMetaV1StatusSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources',
      }),
    code: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Suggested HTTP return code for this status, 0 if not set.' }),
    details: IoK8sApimachineryPkgApisMetaV1StatusDetailsSchema.exactOptional().openapi({
      description:
        'Extended data associated with the reason.  Each reason may define its own extended details. This field is optional and the data returned is not guaranteed to conform to any schema except that defined by the reason type.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'A human-readable description of the status of this operation.' }),
    metadata: IoK8sApimachineryPkgApisMetaV1ListMetaSchema.default({})
      .exactOptional()
      .openapi({
        description:
          'Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A machine-readable description of why this operation is in the "Failure" status. If this value is empty there is no information available. A Reason clarifies an HTTP status code but does not override it.',
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Status of the operation. One of: "Success" or "Failure". More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status',
      }),
  })
  .openapi({
    description: "Status is a return value for calls that don't return other objects.",
    'x-kubernetes-group-version-kind': [{ group: '', kind: 'Status', version: 'v1' }],
    required: [],
  })
  .openapi('IoK8sApimachineryPkgApisMetaV1Status')

const IoK8sApimachineryPkgRuntimeRawExtensionSchema = z
  .object({})
  .openapi({
    description:
      'RawExtension is used to hold extensions in external versions.\n\nTo use this, make a field which has RawExtension as its type in your external, versioned struct, and Object in your internal struct. You also need to register your various plugin types.\n\n// Internal package:\n\n\ttype MyAPIObject struct {\n\t\truntime.TypeMeta `json:""`\n\t\tMyPlugin runtime.Object `json:"myPlugin"`\n\t}\n\n\ttype PluginA struct {\n\t\tAOption string `json:"aOption"`\n\t}\n\n// External package:\n\n\ttype MyAPIObject struct {\n\t\truntime.TypeMeta `json:""`\n\t\tMyPlugin runtime.RawExtension `json:"myPlugin"`\n\t}\n\n\ttype PluginA struct {\n\t\tAOption string `json:"aOption"`\n\t}\n\n// On the wire, the JSON will look something like this:\n\n\t{\n\t\t"kind":"MyAPIObject",\n\t\t"apiVersion":"v1",\n\t\t"myPlugin": {\n\t\t\t"kind":"PluginA",\n\t\t\t"aOption":"foo",\n\t\t},\n\t}\n\nSo what happens? Decode first uses json or yaml to unmarshal the serialized data into your external MyAPIObject. That causes the raw JSON to be stored, but not unpacked. The next step is to copy (using pkg/conversion) into the internal struct. The runtime package\'s DefaultScheme has conversion functions installed which will unpack the JSON stored in RawExtension, turning it into the correct object type, and storing it in the Object. (TODO: In the case where the object is of an unknown type, a runtime.Unknown object will be created and stored.)',
  })
  .openapi('IoK8sApimachineryPkgRuntimeRawExtension')

const IoK8sApimachineryPkgApisMetaV1WatchEventSchema = z
  .object({
    object: IoK8sApimachineryPkgRuntimeRawExtensionSchema.openapi({
      description:
        'Object is:\n * If Type is Added or Modified: the new state of the object.\n * If Type is Deleted: the state of the object immediately before deletion.\n * If Type is Error: *Status is recommended; other types may make sense\n   depending on context.',
    }),
    type: z.string().default(''),
  })
  .openapi({
    description: 'Event represents a single event to a watched resource.',
    required: ['type', 'object'],
    'x-kubernetes-group-version-kind': [
      { group: '', kind: 'WatchEvent', version: 'v1' },
      { group: 'storage.k8s.io', kind: 'WatchEvent', version: 'v1' },
    ],
  })
  .openapi('IoK8sApimachineryPkgApisMetaV1WatchEvent')

const BearerTokenSecurityScheme = {
  description: 'Bearer Token authentication',
  in: 'header',
  name: 'authorization',
  type: 'apiKey',
}

export const getApisStorageK8sIoV1IndexRoute = createRoute({
  method: 'get',
  path: '/apis/storage.k8s.io/v1/',
  tags: ['storage_v1'],
  description: 'get available resources',
  operationId: 'getStorageV1APIResources',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApimachineryPkgApisMetaV1APIResourceListSchema },
        'application/json': { schema: IoK8sApimachineryPkgApisMetaV1APIResourceListSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApimachineryPkgApisMetaV1APIResourceListSchema,
        },
        'application/yaml': { schema: IoK8sApimachineryPkgApisMetaV1APIResourceListSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisStorageK8sIoV1CsidriversRoute = createRoute({
  method: 'get',
  path: '/apis/storage.k8s.io/v1/csidrivers',
  tags: ['storage_v1'],
  description: 'list or watch objects of kind CSIDriver',
  operationId: 'listStorageV1CSIDriver',
  request: {
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      allowWatchBookmarks: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\'s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.',
            in: 'query',
            name: 'allowWatchBookmarks',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      continue: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".\n\nThis field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.',
            in: 'query',
            name: 'continue',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their fields. Defaults to everything.',
            in: 'query',
            name: 'fieldSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      labelSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their labels. Defaults to everything.',
            in: 'query',
            name: 'labelSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.\n\nThe server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersion',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersionMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersionMatch',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      sendInitialEvents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              '`sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.\n\nWhen `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan\n  is interpreted as "data at least as new as the provided `resourceVersion`"\n  and the bookmark event is send when the state is synced\n  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.\n  If `resourceVersion` is unset, this is interpreted as "consistent read" and the\n  bookmark event is send when the state is synced at least to the moment\n  when request started being processed.\n- `resourceVersionMatch` set to any other value or unset\n  Invalid error is returned.\n\nDefaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.',
            in: 'query',
            name: 'sendInitialEvents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      shardSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:\n\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n\nField paths use CEL-style object-rooted syntax (e.g. \"object.metadata.uid\"), NOT the fieldSelector format (\"metadata.uid\"). Currently supported paths:\n  - object.metadata.uid\n  - object.metadata.namespace\n\nhexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.\n\nExamples:\n  2-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n  4-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')\n    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')\n    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')\n\nThis is a beta field and is enabled by default via the ShardedListAndWatch feature gate.",
            in: 'query',
            name: 'shardSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      timeoutSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.',
            in: 'query',
            name: 'timeoutSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      watch: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.',
            in: 'query',
            name: 'watch',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1CSIDriverListSchema },
        'application/cbor-seq': { schema: IoK8sApiStorageV1CSIDriverListSchema },
        'application/json': { schema: IoK8sApiStorageV1CSIDriverListSchema },
        'application/json;stream=watch': { schema: IoK8sApiStorageV1CSIDriverListSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1CSIDriverListSchema },
        'application/vnd.kubernetes.protobuf;stream=watch': {
          schema: IoK8sApiStorageV1CSIDriverListSchema,
        },
        'application/yaml': { schema: IoK8sApiStorageV1CSIDriverListSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const postApisStorageK8sIoV1CsidriversRoute = createRoute({
  method: 'post',
  path: '/apis/storage.k8s.io/v1/csidrivers',
  tags: ['storage_v1'],
  description: 'create a CSIDriver',
  operationId: 'createStorageV1CSIDriver',
  request: {
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldManager: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.',
            in: 'query',
            name: 'fieldManager',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldValidation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.',
            in: 'query',
            name: 'fieldValidation',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
    }),
    body: { content: { '*/*': { schema: IoK8sApiStorageV1CSIDriverSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1CSIDriverSchema },
        'application/json': { schema: IoK8sApiStorageV1CSIDriverSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1CSIDriverSchema },
        'application/yaml': { schema: IoK8sApiStorageV1CSIDriverSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1CSIDriverSchema },
        'application/json': { schema: IoK8sApiStorageV1CSIDriverSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1CSIDriverSchema },
        'application/yaml': { schema: IoK8sApiStorageV1CSIDriverSchema },
      },
    },
    202: {
      description: 'Accepted',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1CSIDriverSchema },
        'application/json': { schema: IoK8sApiStorageV1CSIDriverSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1CSIDriverSchema },
        'application/yaml': { schema: IoK8sApiStorageV1CSIDriverSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const deleteApisStorageK8sIoV1CsidriversRoute = createRoute({
  method: 'delete',
  path: '/apis/storage.k8s.io/v1/csidrivers',
  tags: ['storage_v1'],
  description: 'delete collection of CSIDriver',
  operationId: 'deleteStorageV1CollectionCSIDriver',
  request: {
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      continue: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".\n\nThis field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.',
            in: 'query',
            name: 'continue',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their fields. Defaults to everything.',
            in: 'query',
            name: 'fieldSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      gracePeriodSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.',
            in: 'query',
            name: 'gracePeriodSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      ignoreStoreReadErrorWithClusterBreakingPotential: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it',
            in: 'query',
            name: 'ignoreStoreReadErrorWithClusterBreakingPotential',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      labelSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their labels. Defaults to everything.',
            in: 'query',
            name: 'labelSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.\n\nThe server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      orphanDependents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object\'s finalizers list. Either this field or PropagationPolicy may be set, but not both.',
            in: 'query',
            name: 'orphanDependents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      propagationPolicy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.",
            in: 'query',
            name: 'propagationPolicy',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersion',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersionMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersionMatch',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      sendInitialEvents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              '`sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.\n\nWhen `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan\n  is interpreted as "data at least as new as the provided `resourceVersion`"\n  and the bookmark event is send when the state is synced\n  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.\n  If `resourceVersion` is unset, this is interpreted as "consistent read" and the\n  bookmark event is send when the state is synced at least to the moment\n  when request started being processed.\n- `resourceVersionMatch` set to any other value or unset\n  Invalid error is returned.\n\nDefaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.',
            in: 'query',
            name: 'sendInitialEvents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      shardSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:\n\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n\nField paths use CEL-style object-rooted syntax (e.g. \"object.metadata.uid\"), NOT the fieldSelector format (\"metadata.uid\"). Currently supported paths:\n  - object.metadata.uid\n  - object.metadata.namespace\n\nhexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.\n\nExamples:\n  2-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n  4-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')\n    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')\n    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')\n\nThis is a beta field and is enabled by default via the ShardedListAndWatch feature gate.",
            in: 'query',
            name: 'shardSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      timeoutSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.',
            in: 'query',
            name: 'timeoutSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
    }),
    body: { content: { '*/*': { schema: IoK8sApimachineryPkgApisMetaV1DeleteOptionsSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApimachineryPkgApisMetaV1StatusSchema },
        'application/json': { schema: IoK8sApimachineryPkgApisMetaV1StatusSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApimachineryPkgApisMetaV1StatusSchema,
        },
        'application/yaml': { schema: IoK8sApimachineryPkgApisMetaV1StatusSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisStorageK8sIoV1CsidriversNameRoute = createRoute({
  method: 'get',
  path: '/apis/storage.k8s.io/v1/csidrivers/{name}',
  tags: ['storage_v1'],
  description: 'read the specified CSIDriver',
  operationId: 'readStorageV1CSIDriver',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the CSIDriver',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1CSIDriverSchema },
        'application/json': { schema: IoK8sApiStorageV1CSIDriverSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1CSIDriverSchema },
        'application/yaml': { schema: IoK8sApiStorageV1CSIDriverSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const putApisStorageK8sIoV1CsidriversNameRoute = createRoute({
  method: 'put',
  path: '/apis/storage.k8s.io/v1/csidrivers/{name}',
  tags: ['storage_v1'],
  description: 'replace the specified CSIDriver',
  operationId: 'replaceStorageV1CSIDriver',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the CSIDriver',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldManager: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.',
            in: 'query',
            name: 'fieldManager',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldValidation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.',
            in: 'query',
            name: 'fieldValidation',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
    }),
    body: { content: { '*/*': { schema: IoK8sApiStorageV1CSIDriverSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1CSIDriverSchema },
        'application/json': { schema: IoK8sApiStorageV1CSIDriverSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1CSIDriverSchema },
        'application/yaml': { schema: IoK8sApiStorageV1CSIDriverSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1CSIDriverSchema },
        'application/json': { schema: IoK8sApiStorageV1CSIDriverSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1CSIDriverSchema },
        'application/yaml': { schema: IoK8sApiStorageV1CSIDriverSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const deleteApisStorageK8sIoV1CsidriversNameRoute = createRoute({
  method: 'delete',
  path: '/apis/storage.k8s.io/v1/csidrivers/{name}',
  tags: ['storage_v1'],
  description: 'delete a CSIDriver',
  operationId: 'deleteStorageV1CSIDriver',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the CSIDriver',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      gracePeriodSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.',
            in: 'query',
            name: 'gracePeriodSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      ignoreStoreReadErrorWithClusterBreakingPotential: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it',
            in: 'query',
            name: 'ignoreStoreReadErrorWithClusterBreakingPotential',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      orphanDependents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object\'s finalizers list. Either this field or PropagationPolicy may be set, but not both.',
            in: 'query',
            name: 'orphanDependents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      propagationPolicy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.",
            in: 'query',
            name: 'propagationPolicy',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
    }),
    body: { content: { '*/*': { schema: IoK8sApimachineryPkgApisMetaV1DeleteOptionsSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1CSIDriverSchema },
        'application/json': { schema: IoK8sApiStorageV1CSIDriverSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1CSIDriverSchema },
        'application/yaml': { schema: IoK8sApiStorageV1CSIDriverSchema },
      },
    },
    202: {
      description: 'Accepted',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1CSIDriverSchema },
        'application/json': { schema: IoK8sApiStorageV1CSIDriverSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1CSIDriverSchema },
        'application/yaml': { schema: IoK8sApiStorageV1CSIDriverSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const patchApisStorageK8sIoV1CsidriversNameRoute = createRoute({
  method: 'patch',
  path: '/apis/storage.k8s.io/v1/csidrivers/{name}',
  tags: ['storage_v1'],
  description: 'partially update the specified CSIDriver',
  operationId: 'patchStorageV1CSIDriver',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the CSIDriver',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldManager: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).',
            in: 'query',
            name: 'fieldManager',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldValidation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.',
            in: 'query',
            name: 'fieldValidation',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.',
            in: 'query',
            name: 'force',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/apply-patch+cbor': { schema: IoK8sApimachineryPkgApisMetaV1PatchSchema },
        'application/apply-patch+yaml': { schema: IoK8sApimachineryPkgApisMetaV1PatchSchema },
        'application/json-patch+json': { schema: IoK8sApimachineryPkgApisMetaV1PatchSchema },
        'application/merge-patch+json': { schema: IoK8sApimachineryPkgApisMetaV1PatchSchema },
        'application/strategic-merge-patch+json': {
          schema: IoK8sApimachineryPkgApisMetaV1PatchSchema,
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1CSIDriverSchema },
        'application/json': { schema: IoK8sApiStorageV1CSIDriverSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1CSIDriverSchema },
        'application/yaml': { schema: IoK8sApiStorageV1CSIDriverSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1CSIDriverSchema },
        'application/json': { schema: IoK8sApiStorageV1CSIDriverSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1CSIDriverSchema },
        'application/yaml': { schema: IoK8sApiStorageV1CSIDriverSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisStorageK8sIoV1CsinodesRoute = createRoute({
  method: 'get',
  path: '/apis/storage.k8s.io/v1/csinodes',
  tags: ['storage_v1'],
  description: 'list or watch objects of kind CSINode',
  operationId: 'listStorageV1CSINode',
  request: {
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      allowWatchBookmarks: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\'s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.',
            in: 'query',
            name: 'allowWatchBookmarks',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      continue: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".\n\nThis field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.',
            in: 'query',
            name: 'continue',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their fields. Defaults to everything.',
            in: 'query',
            name: 'fieldSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      labelSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their labels. Defaults to everything.',
            in: 'query',
            name: 'labelSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.\n\nThe server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersion',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersionMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersionMatch',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      sendInitialEvents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              '`sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.\n\nWhen `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan\n  is interpreted as "data at least as new as the provided `resourceVersion`"\n  and the bookmark event is send when the state is synced\n  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.\n  If `resourceVersion` is unset, this is interpreted as "consistent read" and the\n  bookmark event is send when the state is synced at least to the moment\n  when request started being processed.\n- `resourceVersionMatch` set to any other value or unset\n  Invalid error is returned.\n\nDefaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.',
            in: 'query',
            name: 'sendInitialEvents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      shardSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:\n\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n\nField paths use CEL-style object-rooted syntax (e.g. \"object.metadata.uid\"), NOT the fieldSelector format (\"metadata.uid\"). Currently supported paths:\n  - object.metadata.uid\n  - object.metadata.namespace\n\nhexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.\n\nExamples:\n  2-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n  4-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')\n    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')\n    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')\n\nThis is a beta field and is enabled by default via the ShardedListAndWatch feature gate.",
            in: 'query',
            name: 'shardSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      timeoutSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.',
            in: 'query',
            name: 'timeoutSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      watch: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.',
            in: 'query',
            name: 'watch',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1CSINodeListSchema },
        'application/cbor-seq': { schema: IoK8sApiStorageV1CSINodeListSchema },
        'application/json': { schema: IoK8sApiStorageV1CSINodeListSchema },
        'application/json;stream=watch': { schema: IoK8sApiStorageV1CSINodeListSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1CSINodeListSchema },
        'application/vnd.kubernetes.protobuf;stream=watch': {
          schema: IoK8sApiStorageV1CSINodeListSchema,
        },
        'application/yaml': { schema: IoK8sApiStorageV1CSINodeListSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const postApisStorageK8sIoV1CsinodesRoute = createRoute({
  method: 'post',
  path: '/apis/storage.k8s.io/v1/csinodes',
  tags: ['storage_v1'],
  description: 'create a CSINode',
  operationId: 'createStorageV1CSINode',
  request: {
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldManager: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.',
            in: 'query',
            name: 'fieldManager',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldValidation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.',
            in: 'query',
            name: 'fieldValidation',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
    }),
    body: { content: { '*/*': { schema: IoK8sApiStorageV1CSINodeSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/json': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/yaml': { schema: IoK8sApiStorageV1CSINodeSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/json': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/yaml': { schema: IoK8sApiStorageV1CSINodeSchema },
      },
    },
    202: {
      description: 'Accepted',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/json': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/yaml': { schema: IoK8sApiStorageV1CSINodeSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const deleteApisStorageK8sIoV1CsinodesRoute = createRoute({
  method: 'delete',
  path: '/apis/storage.k8s.io/v1/csinodes',
  tags: ['storage_v1'],
  description: 'delete collection of CSINode',
  operationId: 'deleteStorageV1CollectionCSINode',
  request: {
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      continue: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".\n\nThis field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.',
            in: 'query',
            name: 'continue',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their fields. Defaults to everything.',
            in: 'query',
            name: 'fieldSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      gracePeriodSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.',
            in: 'query',
            name: 'gracePeriodSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      ignoreStoreReadErrorWithClusterBreakingPotential: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it',
            in: 'query',
            name: 'ignoreStoreReadErrorWithClusterBreakingPotential',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      labelSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their labels. Defaults to everything.',
            in: 'query',
            name: 'labelSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.\n\nThe server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      orphanDependents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object\'s finalizers list. Either this field or PropagationPolicy may be set, but not both.',
            in: 'query',
            name: 'orphanDependents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      propagationPolicy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.",
            in: 'query',
            name: 'propagationPolicy',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersion',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersionMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersionMatch',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      sendInitialEvents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              '`sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.\n\nWhen `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan\n  is interpreted as "data at least as new as the provided `resourceVersion`"\n  and the bookmark event is send when the state is synced\n  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.\n  If `resourceVersion` is unset, this is interpreted as "consistent read" and the\n  bookmark event is send when the state is synced at least to the moment\n  when request started being processed.\n- `resourceVersionMatch` set to any other value or unset\n  Invalid error is returned.\n\nDefaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.',
            in: 'query',
            name: 'sendInitialEvents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      shardSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:\n\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n\nField paths use CEL-style object-rooted syntax (e.g. \"object.metadata.uid\"), NOT the fieldSelector format (\"metadata.uid\"). Currently supported paths:\n  - object.metadata.uid\n  - object.metadata.namespace\n\nhexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.\n\nExamples:\n  2-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n  4-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')\n    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')\n    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')\n\nThis is a beta field and is enabled by default via the ShardedListAndWatch feature gate.",
            in: 'query',
            name: 'shardSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      timeoutSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.',
            in: 'query',
            name: 'timeoutSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
    }),
    body: { content: { '*/*': { schema: IoK8sApimachineryPkgApisMetaV1DeleteOptionsSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApimachineryPkgApisMetaV1StatusSchema },
        'application/json': { schema: IoK8sApimachineryPkgApisMetaV1StatusSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApimachineryPkgApisMetaV1StatusSchema,
        },
        'application/yaml': { schema: IoK8sApimachineryPkgApisMetaV1StatusSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisStorageK8sIoV1CsinodesNameRoute = createRoute({
  method: 'get',
  path: '/apis/storage.k8s.io/v1/csinodes/{name}',
  tags: ['storage_v1'],
  description: 'read the specified CSINode',
  operationId: 'readStorageV1CSINode',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the CSINode',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/json': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/yaml': { schema: IoK8sApiStorageV1CSINodeSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const putApisStorageK8sIoV1CsinodesNameRoute = createRoute({
  method: 'put',
  path: '/apis/storage.k8s.io/v1/csinodes/{name}',
  tags: ['storage_v1'],
  description: 'replace the specified CSINode',
  operationId: 'replaceStorageV1CSINode',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the CSINode',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldManager: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.',
            in: 'query',
            name: 'fieldManager',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldValidation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.',
            in: 'query',
            name: 'fieldValidation',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
    }),
    body: { content: { '*/*': { schema: IoK8sApiStorageV1CSINodeSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/json': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/yaml': { schema: IoK8sApiStorageV1CSINodeSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/json': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/yaml': { schema: IoK8sApiStorageV1CSINodeSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const deleteApisStorageK8sIoV1CsinodesNameRoute = createRoute({
  method: 'delete',
  path: '/apis/storage.k8s.io/v1/csinodes/{name}',
  tags: ['storage_v1'],
  description: 'delete a CSINode',
  operationId: 'deleteStorageV1CSINode',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the CSINode',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      gracePeriodSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.',
            in: 'query',
            name: 'gracePeriodSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      ignoreStoreReadErrorWithClusterBreakingPotential: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it',
            in: 'query',
            name: 'ignoreStoreReadErrorWithClusterBreakingPotential',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      orphanDependents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object\'s finalizers list. Either this field or PropagationPolicy may be set, but not both.',
            in: 'query',
            name: 'orphanDependents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      propagationPolicy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.",
            in: 'query',
            name: 'propagationPolicy',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
    }),
    body: { content: { '*/*': { schema: IoK8sApimachineryPkgApisMetaV1DeleteOptionsSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/json': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/yaml': { schema: IoK8sApiStorageV1CSINodeSchema },
      },
    },
    202: {
      description: 'Accepted',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/json': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/yaml': { schema: IoK8sApiStorageV1CSINodeSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const patchApisStorageK8sIoV1CsinodesNameRoute = createRoute({
  method: 'patch',
  path: '/apis/storage.k8s.io/v1/csinodes/{name}',
  tags: ['storage_v1'],
  description: 'partially update the specified CSINode',
  operationId: 'patchStorageV1CSINode',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the CSINode',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldManager: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).',
            in: 'query',
            name: 'fieldManager',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldValidation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.',
            in: 'query',
            name: 'fieldValidation',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.',
            in: 'query',
            name: 'force',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/apply-patch+cbor': { schema: IoK8sApimachineryPkgApisMetaV1PatchSchema },
        'application/apply-patch+yaml': { schema: IoK8sApimachineryPkgApisMetaV1PatchSchema },
        'application/json-patch+json': { schema: IoK8sApimachineryPkgApisMetaV1PatchSchema },
        'application/merge-patch+json': { schema: IoK8sApimachineryPkgApisMetaV1PatchSchema },
        'application/strategic-merge-patch+json': {
          schema: IoK8sApimachineryPkgApisMetaV1PatchSchema,
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/json': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/yaml': { schema: IoK8sApiStorageV1CSINodeSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/json': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/yaml': { schema: IoK8sApiStorageV1CSINodeSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisStorageK8sIoV1CsinodesNameStatusRoute = createRoute({
  method: 'get',
  path: '/apis/storage.k8s.io/v1/csinodes/{name}/status',
  tags: ['storage_v1'],
  description: 'read status of the specified CSINode',
  operationId: 'readStorageV1CSINodeStatus',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the CSINode',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/json': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/yaml': { schema: IoK8sApiStorageV1CSINodeSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const putApisStorageK8sIoV1CsinodesNameStatusRoute = createRoute({
  method: 'put',
  path: '/apis/storage.k8s.io/v1/csinodes/{name}/status',
  tags: ['storage_v1'],
  description: 'replace status of the specified CSINode',
  operationId: 'replaceStorageV1CSINodeStatus',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the CSINode',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldManager: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.',
            in: 'query',
            name: 'fieldManager',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldValidation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.',
            in: 'query',
            name: 'fieldValidation',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
    }),
    body: { content: { '*/*': { schema: IoK8sApiStorageV1CSINodeSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/json': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/yaml': { schema: IoK8sApiStorageV1CSINodeSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/json': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/yaml': { schema: IoK8sApiStorageV1CSINodeSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const patchApisStorageK8sIoV1CsinodesNameStatusRoute = createRoute({
  method: 'patch',
  path: '/apis/storage.k8s.io/v1/csinodes/{name}/status',
  tags: ['storage_v1'],
  description: 'partially update status of the specified CSINode',
  operationId: 'patchStorageV1CSINodeStatus',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the CSINode',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldManager: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).',
            in: 'query',
            name: 'fieldManager',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldValidation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.',
            in: 'query',
            name: 'fieldValidation',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.',
            in: 'query',
            name: 'force',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/apply-patch+cbor': { schema: IoK8sApimachineryPkgApisMetaV1PatchSchema },
        'application/apply-patch+yaml': { schema: IoK8sApimachineryPkgApisMetaV1PatchSchema },
        'application/json-patch+json': { schema: IoK8sApimachineryPkgApisMetaV1PatchSchema },
        'application/merge-patch+json': { schema: IoK8sApimachineryPkgApisMetaV1PatchSchema },
        'application/strategic-merge-patch+json': {
          schema: IoK8sApimachineryPkgApisMetaV1PatchSchema,
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/json': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/yaml': { schema: IoK8sApiStorageV1CSINodeSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/json': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1CSINodeSchema },
        'application/yaml': { schema: IoK8sApiStorageV1CSINodeSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisStorageK8sIoV1CsistoragecapacitiesRoute = createRoute({
  method: 'get',
  path: '/apis/storage.k8s.io/v1/csistoragecapacities',
  tags: ['storage_v1'],
  description: 'list or watch objects of kind CSIStorageCapacity',
  operationId: 'listStorageV1CSIStorageCapacityForAllNamespaces',
  request: {
    query: z.object({
      allowWatchBookmarks: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\'s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.',
            in: 'query',
            name: 'allowWatchBookmarks',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      continue: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".\n\nThis field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.',
            in: 'query',
            name: 'continue',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their fields. Defaults to everything.',
            in: 'query',
            name: 'fieldSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      labelSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their labels. Defaults to everything.',
            in: 'query',
            name: 'labelSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.\n\nThe server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersion',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersionMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersionMatch',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      sendInitialEvents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              '`sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.\n\nWhen `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan\n  is interpreted as "data at least as new as the provided `resourceVersion`"\n  and the bookmark event is send when the state is synced\n  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.\n  If `resourceVersion` is unset, this is interpreted as "consistent read" and the\n  bookmark event is send when the state is synced at least to the moment\n  when request started being processed.\n- `resourceVersionMatch` set to any other value or unset\n  Invalid error is returned.\n\nDefaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.',
            in: 'query',
            name: 'sendInitialEvents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      shardSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:\n\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n\nField paths use CEL-style object-rooted syntax (e.g. \"object.metadata.uid\"), NOT the fieldSelector format (\"metadata.uid\"). Currently supported paths:\n  - object.metadata.uid\n  - object.metadata.namespace\n\nhexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.\n\nExamples:\n  2-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n  4-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')\n    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')\n    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')\n\nThis is a beta field and is enabled by default via the ShardedListAndWatch feature gate.",
            in: 'query',
            name: 'shardSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      timeoutSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.',
            in: 'query',
            name: 'timeoutSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      watch: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.',
            in: 'query',
            name: 'watch',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1CSIStorageCapacityListSchema },
        'application/cbor-seq': { schema: IoK8sApiStorageV1CSIStorageCapacityListSchema },
        'application/json': { schema: IoK8sApiStorageV1CSIStorageCapacityListSchema },
        'application/json;stream=watch': { schema: IoK8sApiStorageV1CSIStorageCapacityListSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiStorageV1CSIStorageCapacityListSchema,
        },
        'application/vnd.kubernetes.protobuf;stream=watch': {
          schema: IoK8sApiStorageV1CSIStorageCapacityListSchema,
        },
        'application/yaml': { schema: IoK8sApiStorageV1CSIStorageCapacityListSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesRoute = createRoute({
  method: 'get',
  path: '/apis/storage.k8s.io/v1/namespaces/{namespace}/csistoragecapacities',
  tags: ['storage_v1'],
  description: 'list or watch objects of kind CSIStorageCapacity',
  operationId: 'listStorageV1NamespacedCSIStorageCapacity',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            description: 'object name and auth scope, such as for teams and projects',
            in: 'path',
            name: 'namespace',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      allowWatchBookmarks: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\'s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.',
            in: 'query',
            name: 'allowWatchBookmarks',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      continue: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".\n\nThis field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.',
            in: 'query',
            name: 'continue',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their fields. Defaults to everything.',
            in: 'query',
            name: 'fieldSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      labelSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their labels. Defaults to everything.',
            in: 'query',
            name: 'labelSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.\n\nThe server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersion',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersionMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersionMatch',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      sendInitialEvents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              '`sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.\n\nWhen `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan\n  is interpreted as "data at least as new as the provided `resourceVersion`"\n  and the bookmark event is send when the state is synced\n  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.\n  If `resourceVersion` is unset, this is interpreted as "consistent read" and the\n  bookmark event is send when the state is synced at least to the moment\n  when request started being processed.\n- `resourceVersionMatch` set to any other value or unset\n  Invalid error is returned.\n\nDefaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.',
            in: 'query',
            name: 'sendInitialEvents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      shardSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:\n\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n\nField paths use CEL-style object-rooted syntax (e.g. \"object.metadata.uid\"), NOT the fieldSelector format (\"metadata.uid\"). Currently supported paths:\n  - object.metadata.uid\n  - object.metadata.namespace\n\nhexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.\n\nExamples:\n  2-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n  4-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')\n    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')\n    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')\n\nThis is a beta field and is enabled by default via the ShardedListAndWatch feature gate.",
            in: 'query',
            name: 'shardSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      timeoutSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.',
            in: 'query',
            name: 'timeoutSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      watch: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.',
            in: 'query',
            name: 'watch',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1CSIStorageCapacityListSchema },
        'application/cbor-seq': { schema: IoK8sApiStorageV1CSIStorageCapacityListSchema },
        'application/json': { schema: IoK8sApiStorageV1CSIStorageCapacityListSchema },
        'application/json;stream=watch': { schema: IoK8sApiStorageV1CSIStorageCapacityListSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiStorageV1CSIStorageCapacityListSchema,
        },
        'application/vnd.kubernetes.protobuf;stream=watch': {
          schema: IoK8sApiStorageV1CSIStorageCapacityListSchema,
        },
        'application/yaml': { schema: IoK8sApiStorageV1CSIStorageCapacityListSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const postApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesRoute = createRoute({
  method: 'post',
  path: '/apis/storage.k8s.io/v1/namespaces/{namespace}/csistoragecapacities',
  tags: ['storage_v1'],
  description: 'create a CSIStorageCapacity',
  operationId: 'createStorageV1NamespacedCSIStorageCapacity',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            description: 'object name and auth scope, such as for teams and projects',
            in: 'path',
            name: 'namespace',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldManager: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.',
            in: 'query',
            name: 'fieldManager',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldValidation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.',
            in: 'query',
            name: 'fieldValidation',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
    }),
    body: {
      content: { '*/*': { schema: IoK8sApiStorageV1CSIStorageCapacitySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1CSIStorageCapacitySchema },
        'application/json': { schema: IoK8sApiStorageV1CSIStorageCapacitySchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiStorageV1CSIStorageCapacitySchema,
        },
        'application/yaml': { schema: IoK8sApiStorageV1CSIStorageCapacitySchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1CSIStorageCapacitySchema },
        'application/json': { schema: IoK8sApiStorageV1CSIStorageCapacitySchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiStorageV1CSIStorageCapacitySchema,
        },
        'application/yaml': { schema: IoK8sApiStorageV1CSIStorageCapacitySchema },
      },
    },
    202: {
      description: 'Accepted',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1CSIStorageCapacitySchema },
        'application/json': { schema: IoK8sApiStorageV1CSIStorageCapacitySchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiStorageV1CSIStorageCapacitySchema,
        },
        'application/yaml': { schema: IoK8sApiStorageV1CSIStorageCapacitySchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const deleteApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesRoute = createRoute({
  method: 'delete',
  path: '/apis/storage.k8s.io/v1/namespaces/{namespace}/csistoragecapacities',
  tags: ['storage_v1'],
  description: 'delete collection of CSIStorageCapacity',
  operationId: 'deleteStorageV1CollectionNamespacedCSIStorageCapacity',
  request: {
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            description: 'object name and auth scope, such as for teams and projects',
            in: 'path',
            name: 'namespace',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      continue: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".\n\nThis field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.',
            in: 'query',
            name: 'continue',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their fields. Defaults to everything.',
            in: 'query',
            name: 'fieldSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      gracePeriodSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.',
            in: 'query',
            name: 'gracePeriodSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      ignoreStoreReadErrorWithClusterBreakingPotential: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it',
            in: 'query',
            name: 'ignoreStoreReadErrorWithClusterBreakingPotential',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      labelSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their labels. Defaults to everything.',
            in: 'query',
            name: 'labelSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.\n\nThe server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      orphanDependents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object\'s finalizers list. Either this field or PropagationPolicy may be set, but not both.',
            in: 'query',
            name: 'orphanDependents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      propagationPolicy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.",
            in: 'query',
            name: 'propagationPolicy',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersion',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersionMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersionMatch',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      sendInitialEvents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              '`sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.\n\nWhen `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan\n  is interpreted as "data at least as new as the provided `resourceVersion`"\n  and the bookmark event is send when the state is synced\n  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.\n  If `resourceVersion` is unset, this is interpreted as "consistent read" and the\n  bookmark event is send when the state is synced at least to the moment\n  when request started being processed.\n- `resourceVersionMatch` set to any other value or unset\n  Invalid error is returned.\n\nDefaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.',
            in: 'query',
            name: 'sendInitialEvents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      shardSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:\n\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n\nField paths use CEL-style object-rooted syntax (e.g. \"object.metadata.uid\"), NOT the fieldSelector format (\"metadata.uid\"). Currently supported paths:\n  - object.metadata.uid\n  - object.metadata.namespace\n\nhexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.\n\nExamples:\n  2-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n  4-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')\n    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')\n    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')\n\nThis is a beta field and is enabled by default via the ShardedListAndWatch feature gate.",
            in: 'query',
            name: 'shardSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      timeoutSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.',
            in: 'query',
            name: 'timeoutSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
    }),
    body: { content: { '*/*': { schema: IoK8sApimachineryPkgApisMetaV1DeleteOptionsSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApimachineryPkgApisMetaV1StatusSchema },
        'application/json': { schema: IoK8sApimachineryPkgApisMetaV1StatusSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApimachineryPkgApisMetaV1StatusSchema,
        },
        'application/yaml': { schema: IoK8sApimachineryPkgApisMetaV1StatusSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesNameRoute = createRoute({
  method: 'get',
  path: '/apis/storage.k8s.io/v1/namespaces/{namespace}/csistoragecapacities/{name}',
  tags: ['storage_v1'],
  description: 'read the specified CSIStorageCapacity',
  operationId: 'readStorageV1NamespacedCSIStorageCapacity',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the CSIStorageCapacity',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
      namespace: z
        .string()
        .openapi({
          param: {
            description: 'object name and auth scope, such as for teams and projects',
            in: 'path',
            name: 'namespace',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1CSIStorageCapacitySchema },
        'application/json': { schema: IoK8sApiStorageV1CSIStorageCapacitySchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiStorageV1CSIStorageCapacitySchema,
        },
        'application/yaml': { schema: IoK8sApiStorageV1CSIStorageCapacitySchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const putApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesNameRoute = createRoute({
  method: 'put',
  path: '/apis/storage.k8s.io/v1/namespaces/{namespace}/csistoragecapacities/{name}',
  tags: ['storage_v1'],
  description: 'replace the specified CSIStorageCapacity',
  operationId: 'replaceStorageV1NamespacedCSIStorageCapacity',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the CSIStorageCapacity',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
      namespace: z
        .string()
        .openapi({
          param: {
            description: 'object name and auth scope, such as for teams and projects',
            in: 'path',
            name: 'namespace',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldManager: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.',
            in: 'query',
            name: 'fieldManager',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldValidation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.',
            in: 'query',
            name: 'fieldValidation',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
    }),
    body: {
      content: { '*/*': { schema: IoK8sApiStorageV1CSIStorageCapacitySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1CSIStorageCapacitySchema },
        'application/json': { schema: IoK8sApiStorageV1CSIStorageCapacitySchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiStorageV1CSIStorageCapacitySchema,
        },
        'application/yaml': { schema: IoK8sApiStorageV1CSIStorageCapacitySchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1CSIStorageCapacitySchema },
        'application/json': { schema: IoK8sApiStorageV1CSIStorageCapacitySchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiStorageV1CSIStorageCapacitySchema,
        },
        'application/yaml': { schema: IoK8sApiStorageV1CSIStorageCapacitySchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const deleteApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesNameRoute = createRoute(
  {
    method: 'delete',
    path: '/apis/storage.k8s.io/v1/namespaces/{namespace}/csistoragecapacities/{name}',
    tags: ['storage_v1'],
    description: 'delete a CSIStorageCapacity',
    operationId: 'deleteStorageV1NamespacedCSIStorageCapacity',
    request: {
      params: z.object({
        name: z
          .string()
          .openapi({
            param: {
              description: 'name of the CSIStorageCapacity',
              in: 'path',
              name: 'name',
              required: true,
              schema: { type: 'string', uniqueItems: true },
            },
          }),
        namespace: z
          .string()
          .openapi({
            param: {
              description: 'object name and auth scope, such as for teams and projects',
              in: 'path',
              name: 'namespace',
              required: true,
              schema: { type: 'string', uniqueItems: true },
            },
          }),
      }),
      query: z.object({
        pretty: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
              in: 'query',
              name: 'pretty',
              schema: { type: 'string', uniqueItems: true },
              required: false,
            },
          }),
        dryRun: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
              in: 'query',
              name: 'dryRun',
              schema: { type: 'string', uniqueItems: true },
              required: false,
            },
          }),
        gracePeriodSeconds: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .exactOptional()
          .openapi({
            param: {
              description:
                'The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.',
              in: 'query',
              name: 'gracePeriodSeconds',
              schema: { type: 'integer', uniqueItems: true },
              required: false,
            },
          }),
        ignoreStoreReadErrorWithClusterBreakingPotential: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              description:
                'if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it',
              in: 'query',
              name: 'ignoreStoreReadErrorWithClusterBreakingPotential',
              schema: { type: 'boolean', uniqueItems: true },
              required: false,
            },
          }),
        orphanDependents: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              description:
                'Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object\'s finalizers list. Either this field or PropagationPolicy may be set, but not both.',
              in: 'query',
              name: 'orphanDependents',
              schema: { type: 'boolean', uniqueItems: true },
              required: false,
            },
          }),
        propagationPolicy: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                "Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.",
              in: 'query',
              name: 'propagationPolicy',
              schema: { type: 'string', uniqueItems: true },
              required: false,
            },
          }),
      }),
      body: { content: { '*/*': { schema: IoK8sApimachineryPkgApisMetaV1DeleteOptionsSchema } } },
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/cbor': { schema: IoK8sApimachineryPkgApisMetaV1StatusSchema },
          'application/json': { schema: IoK8sApimachineryPkgApisMetaV1StatusSchema },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApimachineryPkgApisMetaV1StatusSchema,
          },
          'application/yaml': { schema: IoK8sApimachineryPkgApisMetaV1StatusSchema },
        },
      },
      202: {
        description: 'Accepted',
        content: {
          'application/cbor': { schema: IoK8sApimachineryPkgApisMetaV1StatusSchema },
          'application/json': { schema: IoK8sApimachineryPkgApisMetaV1StatusSchema },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApimachineryPkgApisMetaV1StatusSchema,
          },
          'application/yaml': { schema: IoK8sApimachineryPkgApisMetaV1StatusSchema },
        },
      },
      401: { description: 'Unauthorized' },
    },
  },
)

export const patchApisStorageK8sIoV1NamespacesNamespaceCsistoragecapacitiesNameRoute = createRoute({
  method: 'patch',
  path: '/apis/storage.k8s.io/v1/namespaces/{namespace}/csistoragecapacities/{name}',
  tags: ['storage_v1'],
  description: 'partially update the specified CSIStorageCapacity',
  operationId: 'patchStorageV1NamespacedCSIStorageCapacity',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the CSIStorageCapacity',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
      namespace: z
        .string()
        .openapi({
          param: {
            description: 'object name and auth scope, such as for teams and projects',
            in: 'path',
            name: 'namespace',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldManager: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).',
            in: 'query',
            name: 'fieldManager',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldValidation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.',
            in: 'query',
            name: 'fieldValidation',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.',
            in: 'query',
            name: 'force',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/apply-patch+cbor': { schema: IoK8sApimachineryPkgApisMetaV1PatchSchema },
        'application/apply-patch+yaml': { schema: IoK8sApimachineryPkgApisMetaV1PatchSchema },
        'application/json-patch+json': { schema: IoK8sApimachineryPkgApisMetaV1PatchSchema },
        'application/merge-patch+json': { schema: IoK8sApimachineryPkgApisMetaV1PatchSchema },
        'application/strategic-merge-patch+json': {
          schema: IoK8sApimachineryPkgApisMetaV1PatchSchema,
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1CSIStorageCapacitySchema },
        'application/json': { schema: IoK8sApiStorageV1CSIStorageCapacitySchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiStorageV1CSIStorageCapacitySchema,
        },
        'application/yaml': { schema: IoK8sApiStorageV1CSIStorageCapacitySchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1CSIStorageCapacitySchema },
        'application/json': { schema: IoK8sApiStorageV1CSIStorageCapacitySchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiStorageV1CSIStorageCapacitySchema,
        },
        'application/yaml': { schema: IoK8sApiStorageV1CSIStorageCapacitySchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisStorageK8sIoV1StorageclassesRoute = createRoute({
  method: 'get',
  path: '/apis/storage.k8s.io/v1/storageclasses',
  tags: ['storage_v1'],
  description: 'list or watch objects of kind StorageClass',
  operationId: 'listStorageV1StorageClass',
  request: {
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      allowWatchBookmarks: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\'s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.',
            in: 'query',
            name: 'allowWatchBookmarks',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      continue: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".\n\nThis field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.',
            in: 'query',
            name: 'continue',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their fields. Defaults to everything.',
            in: 'query',
            name: 'fieldSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      labelSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their labels. Defaults to everything.',
            in: 'query',
            name: 'labelSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.\n\nThe server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersion',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersionMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersionMatch',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      sendInitialEvents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              '`sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.\n\nWhen `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan\n  is interpreted as "data at least as new as the provided `resourceVersion`"\n  and the bookmark event is send when the state is synced\n  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.\n  If `resourceVersion` is unset, this is interpreted as "consistent read" and the\n  bookmark event is send when the state is synced at least to the moment\n  when request started being processed.\n- `resourceVersionMatch` set to any other value or unset\n  Invalid error is returned.\n\nDefaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.',
            in: 'query',
            name: 'sendInitialEvents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      shardSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:\n\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n\nField paths use CEL-style object-rooted syntax (e.g. \"object.metadata.uid\"), NOT the fieldSelector format (\"metadata.uid\"). Currently supported paths:\n  - object.metadata.uid\n  - object.metadata.namespace\n\nhexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.\n\nExamples:\n  2-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n  4-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')\n    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')\n    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')\n\nThis is a beta field and is enabled by default via the ShardedListAndWatch feature gate.",
            in: 'query',
            name: 'shardSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      timeoutSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.',
            in: 'query',
            name: 'timeoutSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      watch: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.',
            in: 'query',
            name: 'watch',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1StorageClassListSchema },
        'application/cbor-seq': { schema: IoK8sApiStorageV1StorageClassListSchema },
        'application/json': { schema: IoK8sApiStorageV1StorageClassListSchema },
        'application/json;stream=watch': { schema: IoK8sApiStorageV1StorageClassListSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1StorageClassListSchema },
        'application/vnd.kubernetes.protobuf;stream=watch': {
          schema: IoK8sApiStorageV1StorageClassListSchema,
        },
        'application/yaml': { schema: IoK8sApiStorageV1StorageClassListSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const postApisStorageK8sIoV1StorageclassesRoute = createRoute({
  method: 'post',
  path: '/apis/storage.k8s.io/v1/storageclasses',
  tags: ['storage_v1'],
  description: 'create a StorageClass',
  operationId: 'createStorageV1StorageClass',
  request: {
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldManager: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.',
            in: 'query',
            name: 'fieldManager',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldValidation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.',
            in: 'query',
            name: 'fieldValidation',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
    }),
    body: { content: { '*/*': { schema: IoK8sApiStorageV1StorageClassSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1StorageClassSchema },
        'application/json': { schema: IoK8sApiStorageV1StorageClassSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1StorageClassSchema },
        'application/yaml': { schema: IoK8sApiStorageV1StorageClassSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1StorageClassSchema },
        'application/json': { schema: IoK8sApiStorageV1StorageClassSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1StorageClassSchema },
        'application/yaml': { schema: IoK8sApiStorageV1StorageClassSchema },
      },
    },
    202: {
      description: 'Accepted',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1StorageClassSchema },
        'application/json': { schema: IoK8sApiStorageV1StorageClassSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1StorageClassSchema },
        'application/yaml': { schema: IoK8sApiStorageV1StorageClassSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const deleteApisStorageK8sIoV1StorageclassesRoute = createRoute({
  method: 'delete',
  path: '/apis/storage.k8s.io/v1/storageclasses',
  tags: ['storage_v1'],
  description: 'delete collection of StorageClass',
  operationId: 'deleteStorageV1CollectionStorageClass',
  request: {
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      continue: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".\n\nThis field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.',
            in: 'query',
            name: 'continue',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their fields. Defaults to everything.',
            in: 'query',
            name: 'fieldSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      gracePeriodSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.',
            in: 'query',
            name: 'gracePeriodSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      ignoreStoreReadErrorWithClusterBreakingPotential: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it',
            in: 'query',
            name: 'ignoreStoreReadErrorWithClusterBreakingPotential',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      labelSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their labels. Defaults to everything.',
            in: 'query',
            name: 'labelSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.\n\nThe server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      orphanDependents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object\'s finalizers list. Either this field or PropagationPolicy may be set, but not both.',
            in: 'query',
            name: 'orphanDependents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      propagationPolicy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.",
            in: 'query',
            name: 'propagationPolicy',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersion',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersionMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersionMatch',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      sendInitialEvents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              '`sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.\n\nWhen `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan\n  is interpreted as "data at least as new as the provided `resourceVersion`"\n  and the bookmark event is send when the state is synced\n  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.\n  If `resourceVersion` is unset, this is interpreted as "consistent read" and the\n  bookmark event is send when the state is synced at least to the moment\n  when request started being processed.\n- `resourceVersionMatch` set to any other value or unset\n  Invalid error is returned.\n\nDefaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.',
            in: 'query',
            name: 'sendInitialEvents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      shardSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:\n\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n\nField paths use CEL-style object-rooted syntax (e.g. \"object.metadata.uid\"), NOT the fieldSelector format (\"metadata.uid\"). Currently supported paths:\n  - object.metadata.uid\n  - object.metadata.namespace\n\nhexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.\n\nExamples:\n  2-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n  4-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')\n    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')\n    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')\n\nThis is a beta field and is enabled by default via the ShardedListAndWatch feature gate.",
            in: 'query',
            name: 'shardSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      timeoutSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.',
            in: 'query',
            name: 'timeoutSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
    }),
    body: { content: { '*/*': { schema: IoK8sApimachineryPkgApisMetaV1DeleteOptionsSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApimachineryPkgApisMetaV1StatusSchema },
        'application/json': { schema: IoK8sApimachineryPkgApisMetaV1StatusSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApimachineryPkgApisMetaV1StatusSchema,
        },
        'application/yaml': { schema: IoK8sApimachineryPkgApisMetaV1StatusSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisStorageK8sIoV1StorageclassesNameRoute = createRoute({
  method: 'get',
  path: '/apis/storage.k8s.io/v1/storageclasses/{name}',
  tags: ['storage_v1'],
  description: 'read the specified StorageClass',
  operationId: 'readStorageV1StorageClass',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the StorageClass',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1StorageClassSchema },
        'application/json': { schema: IoK8sApiStorageV1StorageClassSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1StorageClassSchema },
        'application/yaml': { schema: IoK8sApiStorageV1StorageClassSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const putApisStorageK8sIoV1StorageclassesNameRoute = createRoute({
  method: 'put',
  path: '/apis/storage.k8s.io/v1/storageclasses/{name}',
  tags: ['storage_v1'],
  description: 'replace the specified StorageClass',
  operationId: 'replaceStorageV1StorageClass',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the StorageClass',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldManager: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.',
            in: 'query',
            name: 'fieldManager',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldValidation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.',
            in: 'query',
            name: 'fieldValidation',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
    }),
    body: { content: { '*/*': { schema: IoK8sApiStorageV1StorageClassSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1StorageClassSchema },
        'application/json': { schema: IoK8sApiStorageV1StorageClassSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1StorageClassSchema },
        'application/yaml': { schema: IoK8sApiStorageV1StorageClassSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1StorageClassSchema },
        'application/json': { schema: IoK8sApiStorageV1StorageClassSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1StorageClassSchema },
        'application/yaml': { schema: IoK8sApiStorageV1StorageClassSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const deleteApisStorageK8sIoV1StorageclassesNameRoute = createRoute({
  method: 'delete',
  path: '/apis/storage.k8s.io/v1/storageclasses/{name}',
  tags: ['storage_v1'],
  description: 'delete a StorageClass',
  operationId: 'deleteStorageV1StorageClass',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the StorageClass',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      gracePeriodSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.',
            in: 'query',
            name: 'gracePeriodSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      ignoreStoreReadErrorWithClusterBreakingPotential: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it',
            in: 'query',
            name: 'ignoreStoreReadErrorWithClusterBreakingPotential',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      orphanDependents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object\'s finalizers list. Either this field or PropagationPolicy may be set, but not both.',
            in: 'query',
            name: 'orphanDependents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      propagationPolicy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.",
            in: 'query',
            name: 'propagationPolicy',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
    }),
    body: { content: { '*/*': { schema: IoK8sApimachineryPkgApisMetaV1DeleteOptionsSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1StorageClassSchema },
        'application/json': { schema: IoK8sApiStorageV1StorageClassSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1StorageClassSchema },
        'application/yaml': { schema: IoK8sApiStorageV1StorageClassSchema },
      },
    },
    202: {
      description: 'Accepted',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1StorageClassSchema },
        'application/json': { schema: IoK8sApiStorageV1StorageClassSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1StorageClassSchema },
        'application/yaml': { schema: IoK8sApiStorageV1StorageClassSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const patchApisStorageK8sIoV1StorageclassesNameRoute = createRoute({
  method: 'patch',
  path: '/apis/storage.k8s.io/v1/storageclasses/{name}',
  tags: ['storage_v1'],
  description: 'partially update the specified StorageClass',
  operationId: 'patchStorageV1StorageClass',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the StorageClass',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldManager: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).',
            in: 'query',
            name: 'fieldManager',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldValidation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.',
            in: 'query',
            name: 'fieldValidation',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.',
            in: 'query',
            name: 'force',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/apply-patch+cbor': { schema: IoK8sApimachineryPkgApisMetaV1PatchSchema },
        'application/apply-patch+yaml': { schema: IoK8sApimachineryPkgApisMetaV1PatchSchema },
        'application/json-patch+json': { schema: IoK8sApimachineryPkgApisMetaV1PatchSchema },
        'application/merge-patch+json': { schema: IoK8sApimachineryPkgApisMetaV1PatchSchema },
        'application/strategic-merge-patch+json': {
          schema: IoK8sApimachineryPkgApisMetaV1PatchSchema,
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1StorageClassSchema },
        'application/json': { schema: IoK8sApiStorageV1StorageClassSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1StorageClassSchema },
        'application/yaml': { schema: IoK8sApiStorageV1StorageClassSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1StorageClassSchema },
        'application/json': { schema: IoK8sApiStorageV1StorageClassSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1StorageClassSchema },
        'application/yaml': { schema: IoK8sApiStorageV1StorageClassSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisStorageK8sIoV1VolumeattachmentsRoute = createRoute({
  method: 'get',
  path: '/apis/storage.k8s.io/v1/volumeattachments',
  tags: ['storage_v1'],
  description: 'list or watch objects of kind VolumeAttachment',
  operationId: 'listStorageV1VolumeAttachment',
  request: {
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      allowWatchBookmarks: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\'s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.',
            in: 'query',
            name: 'allowWatchBookmarks',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      continue: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".\n\nThis field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.',
            in: 'query',
            name: 'continue',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their fields. Defaults to everything.',
            in: 'query',
            name: 'fieldSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      labelSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their labels. Defaults to everything.',
            in: 'query',
            name: 'labelSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.\n\nThe server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersion',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersionMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersionMatch',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      sendInitialEvents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              '`sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.\n\nWhen `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan\n  is interpreted as "data at least as new as the provided `resourceVersion`"\n  and the bookmark event is send when the state is synced\n  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.\n  If `resourceVersion` is unset, this is interpreted as "consistent read" and the\n  bookmark event is send when the state is synced at least to the moment\n  when request started being processed.\n- `resourceVersionMatch` set to any other value or unset\n  Invalid error is returned.\n\nDefaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.',
            in: 'query',
            name: 'sendInitialEvents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      shardSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:\n\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n\nField paths use CEL-style object-rooted syntax (e.g. \"object.metadata.uid\"), NOT the fieldSelector format (\"metadata.uid\"). Currently supported paths:\n  - object.metadata.uid\n  - object.metadata.namespace\n\nhexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.\n\nExamples:\n  2-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n  4-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')\n    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')\n    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')\n\nThis is a beta field and is enabled by default via the ShardedListAndWatch feature gate.",
            in: 'query',
            name: 'shardSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      timeoutSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.',
            in: 'query',
            name: 'timeoutSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      watch: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.',
            in: 'query',
            name: 'watch',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1VolumeAttachmentListSchema },
        'application/cbor-seq': { schema: IoK8sApiStorageV1VolumeAttachmentListSchema },
        'application/json': { schema: IoK8sApiStorageV1VolumeAttachmentListSchema },
        'application/json;stream=watch': { schema: IoK8sApiStorageV1VolumeAttachmentListSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiStorageV1VolumeAttachmentListSchema,
        },
        'application/vnd.kubernetes.protobuf;stream=watch': {
          schema: IoK8sApiStorageV1VolumeAttachmentListSchema,
        },
        'application/yaml': { schema: IoK8sApiStorageV1VolumeAttachmentListSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const postApisStorageK8sIoV1VolumeattachmentsRoute = createRoute({
  method: 'post',
  path: '/apis/storage.k8s.io/v1/volumeattachments',
  tags: ['storage_v1'],
  description: 'create a VolumeAttachment',
  operationId: 'createStorageV1VolumeAttachment',
  request: {
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldManager: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.',
            in: 'query',
            name: 'fieldManager',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldValidation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.',
            in: 'query',
            name: 'fieldValidation',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
    }),
    body: {
      content: { '*/*': { schema: IoK8sApiStorageV1VolumeAttachmentSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/json': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/yaml': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/json': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/yaml': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
      },
    },
    202: {
      description: 'Accepted',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/json': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/yaml': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const deleteApisStorageK8sIoV1VolumeattachmentsRoute = createRoute({
  method: 'delete',
  path: '/apis/storage.k8s.io/v1/volumeattachments',
  tags: ['storage_v1'],
  description: 'delete collection of VolumeAttachment',
  operationId: 'deleteStorageV1CollectionVolumeAttachment',
  request: {
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      continue: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".\n\nThis field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.',
            in: 'query',
            name: 'continue',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their fields. Defaults to everything.',
            in: 'query',
            name: 'fieldSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      gracePeriodSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.',
            in: 'query',
            name: 'gracePeriodSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      ignoreStoreReadErrorWithClusterBreakingPotential: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it',
            in: 'query',
            name: 'ignoreStoreReadErrorWithClusterBreakingPotential',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      labelSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their labels. Defaults to everything.',
            in: 'query',
            name: 'labelSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.\n\nThe server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      orphanDependents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object\'s finalizers list. Either this field or PropagationPolicy may be set, but not both.',
            in: 'query',
            name: 'orphanDependents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      propagationPolicy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.",
            in: 'query',
            name: 'propagationPolicy',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersion',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersionMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersionMatch',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      sendInitialEvents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              '`sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.\n\nWhen `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan\n  is interpreted as "data at least as new as the provided `resourceVersion`"\n  and the bookmark event is send when the state is synced\n  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.\n  If `resourceVersion` is unset, this is interpreted as "consistent read" and the\n  bookmark event is send when the state is synced at least to the moment\n  when request started being processed.\n- `resourceVersionMatch` set to any other value or unset\n  Invalid error is returned.\n\nDefaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.',
            in: 'query',
            name: 'sendInitialEvents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      shardSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:\n\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n\nField paths use CEL-style object-rooted syntax (e.g. \"object.metadata.uid\"), NOT the fieldSelector format (\"metadata.uid\"). Currently supported paths:\n  - object.metadata.uid\n  - object.metadata.namespace\n\nhexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.\n\nExamples:\n  2-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n  4-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')\n    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')\n    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')\n\nThis is a beta field and is enabled by default via the ShardedListAndWatch feature gate.",
            in: 'query',
            name: 'shardSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      timeoutSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.',
            in: 'query',
            name: 'timeoutSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
    }),
    body: { content: { '*/*': { schema: IoK8sApimachineryPkgApisMetaV1DeleteOptionsSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApimachineryPkgApisMetaV1StatusSchema },
        'application/json': { schema: IoK8sApimachineryPkgApisMetaV1StatusSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApimachineryPkgApisMetaV1StatusSchema,
        },
        'application/yaml': { schema: IoK8sApimachineryPkgApisMetaV1StatusSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisStorageK8sIoV1VolumeattachmentsNameRoute = createRoute({
  method: 'get',
  path: '/apis/storage.k8s.io/v1/volumeattachments/{name}',
  tags: ['storage_v1'],
  description: 'read the specified VolumeAttachment',
  operationId: 'readStorageV1VolumeAttachment',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the VolumeAttachment',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/json': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/yaml': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const putApisStorageK8sIoV1VolumeattachmentsNameRoute = createRoute({
  method: 'put',
  path: '/apis/storage.k8s.io/v1/volumeattachments/{name}',
  tags: ['storage_v1'],
  description: 'replace the specified VolumeAttachment',
  operationId: 'replaceStorageV1VolumeAttachment',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the VolumeAttachment',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldManager: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.',
            in: 'query',
            name: 'fieldManager',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldValidation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.',
            in: 'query',
            name: 'fieldValidation',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
    }),
    body: {
      content: { '*/*': { schema: IoK8sApiStorageV1VolumeAttachmentSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/json': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/yaml': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/json': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/yaml': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const deleteApisStorageK8sIoV1VolumeattachmentsNameRoute = createRoute({
  method: 'delete',
  path: '/apis/storage.k8s.io/v1/volumeattachments/{name}',
  tags: ['storage_v1'],
  description: 'delete a VolumeAttachment',
  operationId: 'deleteStorageV1VolumeAttachment',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the VolumeAttachment',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      gracePeriodSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.',
            in: 'query',
            name: 'gracePeriodSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      ignoreStoreReadErrorWithClusterBreakingPotential: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it',
            in: 'query',
            name: 'ignoreStoreReadErrorWithClusterBreakingPotential',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      orphanDependents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object\'s finalizers list. Either this field or PropagationPolicy may be set, but not both.',
            in: 'query',
            name: 'orphanDependents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      propagationPolicy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.",
            in: 'query',
            name: 'propagationPolicy',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
    }),
    body: { content: { '*/*': { schema: IoK8sApimachineryPkgApisMetaV1DeleteOptionsSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/json': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/yaml': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
      },
    },
    202: {
      description: 'Accepted',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/json': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/yaml': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const patchApisStorageK8sIoV1VolumeattachmentsNameRoute = createRoute({
  method: 'patch',
  path: '/apis/storage.k8s.io/v1/volumeattachments/{name}',
  tags: ['storage_v1'],
  description: 'partially update the specified VolumeAttachment',
  operationId: 'patchStorageV1VolumeAttachment',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the VolumeAttachment',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldManager: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).',
            in: 'query',
            name: 'fieldManager',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldValidation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.',
            in: 'query',
            name: 'fieldValidation',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.',
            in: 'query',
            name: 'force',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/apply-patch+cbor': { schema: IoK8sApimachineryPkgApisMetaV1PatchSchema },
        'application/apply-patch+yaml': { schema: IoK8sApimachineryPkgApisMetaV1PatchSchema },
        'application/json-patch+json': { schema: IoK8sApimachineryPkgApisMetaV1PatchSchema },
        'application/merge-patch+json': { schema: IoK8sApimachineryPkgApisMetaV1PatchSchema },
        'application/strategic-merge-patch+json': {
          schema: IoK8sApimachineryPkgApisMetaV1PatchSchema,
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/json': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/yaml': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/json': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/yaml': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisStorageK8sIoV1VolumeattachmentsNameStatusRoute = createRoute({
  method: 'get',
  path: '/apis/storage.k8s.io/v1/volumeattachments/{name}/status',
  tags: ['storage_v1'],
  description: 'read status of the specified VolumeAttachment',
  operationId: 'readStorageV1VolumeAttachmentStatus',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the VolumeAttachment',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/json': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/yaml': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const putApisStorageK8sIoV1VolumeattachmentsNameStatusRoute = createRoute({
  method: 'put',
  path: '/apis/storage.k8s.io/v1/volumeattachments/{name}/status',
  tags: ['storage_v1'],
  description: 'replace status of the specified VolumeAttachment',
  operationId: 'replaceStorageV1VolumeAttachmentStatus',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the VolumeAttachment',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldManager: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.',
            in: 'query',
            name: 'fieldManager',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldValidation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.',
            in: 'query',
            name: 'fieldValidation',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
    }),
    body: {
      content: { '*/*': { schema: IoK8sApiStorageV1VolumeAttachmentSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/json': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/yaml': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/json': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/yaml': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const patchApisStorageK8sIoV1VolumeattachmentsNameStatusRoute = createRoute({
  method: 'patch',
  path: '/apis/storage.k8s.io/v1/volumeattachments/{name}/status',
  tags: ['storage_v1'],
  description: 'partially update status of the specified VolumeAttachment',
  operationId: 'patchStorageV1VolumeAttachmentStatus',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the VolumeAttachment',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldManager: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).',
            in: 'query',
            name: 'fieldManager',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldValidation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.',
            in: 'query',
            name: 'fieldValidation',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.',
            in: 'query',
            name: 'force',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/apply-patch+cbor': { schema: IoK8sApimachineryPkgApisMetaV1PatchSchema },
        'application/apply-patch+yaml': { schema: IoK8sApimachineryPkgApisMetaV1PatchSchema },
        'application/json-patch+json': { schema: IoK8sApimachineryPkgApisMetaV1PatchSchema },
        'application/merge-patch+json': { schema: IoK8sApimachineryPkgApisMetaV1PatchSchema },
        'application/strategic-merge-patch+json': {
          schema: IoK8sApimachineryPkgApisMetaV1PatchSchema,
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/json': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/yaml': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/json': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/vnd.kubernetes.protobuf': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
        'application/yaml': { schema: IoK8sApiStorageV1VolumeAttachmentSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisStorageK8sIoV1VolumeattributesclassesRoute = createRoute({
  method: 'get',
  path: '/apis/storage.k8s.io/v1/volumeattributesclasses',
  tags: ['storage_v1'],
  description: 'list or watch objects of kind VolumeAttributesClass',
  operationId: 'listStorageV1VolumeAttributesClass',
  request: {
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      allowWatchBookmarks: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\'s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.',
            in: 'query',
            name: 'allowWatchBookmarks',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      continue: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".\n\nThis field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.',
            in: 'query',
            name: 'continue',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their fields. Defaults to everything.',
            in: 'query',
            name: 'fieldSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      labelSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their labels. Defaults to everything.',
            in: 'query',
            name: 'labelSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.\n\nThe server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersion',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersionMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersionMatch',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      sendInitialEvents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              '`sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.\n\nWhen `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan\n  is interpreted as "data at least as new as the provided `resourceVersion`"\n  and the bookmark event is send when the state is synced\n  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.\n  If `resourceVersion` is unset, this is interpreted as "consistent read" and the\n  bookmark event is send when the state is synced at least to the moment\n  when request started being processed.\n- `resourceVersionMatch` set to any other value or unset\n  Invalid error is returned.\n\nDefaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.',
            in: 'query',
            name: 'sendInitialEvents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      shardSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:\n\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n\nField paths use CEL-style object-rooted syntax (e.g. \"object.metadata.uid\"), NOT the fieldSelector format (\"metadata.uid\"). Currently supported paths:\n  - object.metadata.uid\n  - object.metadata.namespace\n\nhexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.\n\nExamples:\n  2-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n  4-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')\n    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')\n    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')\n\nThis is a beta field and is enabled by default via the ShardedListAndWatch feature gate.",
            in: 'query',
            name: 'shardSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      timeoutSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.',
            in: 'query',
            name: 'timeoutSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      watch: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.',
            in: 'query',
            name: 'watch',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1VolumeAttributesClassListSchema },
        'application/cbor-seq': { schema: IoK8sApiStorageV1VolumeAttributesClassListSchema },
        'application/json': { schema: IoK8sApiStorageV1VolumeAttributesClassListSchema },
        'application/json;stream=watch': {
          schema: IoK8sApiStorageV1VolumeAttributesClassListSchema,
        },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiStorageV1VolumeAttributesClassListSchema,
        },
        'application/vnd.kubernetes.protobuf;stream=watch': {
          schema: IoK8sApiStorageV1VolumeAttributesClassListSchema,
        },
        'application/yaml': { schema: IoK8sApiStorageV1VolumeAttributesClassListSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const postApisStorageK8sIoV1VolumeattributesclassesRoute = createRoute({
  method: 'post',
  path: '/apis/storage.k8s.io/v1/volumeattributesclasses',
  tags: ['storage_v1'],
  description: 'create a VolumeAttributesClass',
  operationId: 'createStorageV1VolumeAttributesClass',
  request: {
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldManager: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.',
            in: 'query',
            name: 'fieldManager',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldValidation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.',
            in: 'query',
            name: 'fieldValidation',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
    }),
    body: {
      content: { '*/*': { schema: IoK8sApiStorageV1VolumeAttributesClassSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1VolumeAttributesClassSchema },
        'application/json': { schema: IoK8sApiStorageV1VolumeAttributesClassSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiStorageV1VolumeAttributesClassSchema,
        },
        'application/yaml': { schema: IoK8sApiStorageV1VolumeAttributesClassSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1VolumeAttributesClassSchema },
        'application/json': { schema: IoK8sApiStorageV1VolumeAttributesClassSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiStorageV1VolumeAttributesClassSchema,
        },
        'application/yaml': { schema: IoK8sApiStorageV1VolumeAttributesClassSchema },
      },
    },
    202: {
      description: 'Accepted',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1VolumeAttributesClassSchema },
        'application/json': { schema: IoK8sApiStorageV1VolumeAttributesClassSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiStorageV1VolumeAttributesClassSchema,
        },
        'application/yaml': { schema: IoK8sApiStorageV1VolumeAttributesClassSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const deleteApisStorageK8sIoV1VolumeattributesclassesRoute = createRoute({
  method: 'delete',
  path: '/apis/storage.k8s.io/v1/volumeattributesclasses',
  tags: ['storage_v1'],
  description: 'delete collection of VolumeAttributesClass',
  operationId: 'deleteStorageV1CollectionVolumeAttributesClass',
  request: {
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      continue: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".\n\nThis field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.',
            in: 'query',
            name: 'continue',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their fields. Defaults to everything.',
            in: 'query',
            name: 'fieldSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      gracePeriodSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.',
            in: 'query',
            name: 'gracePeriodSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      ignoreStoreReadErrorWithClusterBreakingPotential: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it',
            in: 'query',
            name: 'ignoreStoreReadErrorWithClusterBreakingPotential',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      labelSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their labels. Defaults to everything.',
            in: 'query',
            name: 'labelSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.\n\nThe server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      orphanDependents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object\'s finalizers list. Either this field or PropagationPolicy may be set, but not both.',
            in: 'query',
            name: 'orphanDependents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      propagationPolicy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.",
            in: 'query',
            name: 'propagationPolicy',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersion',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersionMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersionMatch',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      sendInitialEvents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              '`sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.\n\nWhen `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan\n  is interpreted as "data at least as new as the provided `resourceVersion`"\n  and the bookmark event is send when the state is synced\n  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.\n  If `resourceVersion` is unset, this is interpreted as "consistent read" and the\n  bookmark event is send when the state is synced at least to the moment\n  when request started being processed.\n- `resourceVersionMatch` set to any other value or unset\n  Invalid error is returned.\n\nDefaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.',
            in: 'query',
            name: 'sendInitialEvents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      shardSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:\n\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n\nField paths use CEL-style object-rooted syntax (e.g. \"object.metadata.uid\"), NOT the fieldSelector format (\"metadata.uid\"). Currently supported paths:\n  - object.metadata.uid\n  - object.metadata.namespace\n\nhexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.\n\nExamples:\n  2-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n  4-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')\n    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')\n    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')\n\nThis is a beta field and is enabled by default via the ShardedListAndWatch feature gate.",
            in: 'query',
            name: 'shardSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      timeoutSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.',
            in: 'query',
            name: 'timeoutSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
    }),
    body: { content: { '*/*': { schema: IoK8sApimachineryPkgApisMetaV1DeleteOptionsSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApimachineryPkgApisMetaV1StatusSchema },
        'application/json': { schema: IoK8sApimachineryPkgApisMetaV1StatusSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApimachineryPkgApisMetaV1StatusSchema,
        },
        'application/yaml': { schema: IoK8sApimachineryPkgApisMetaV1StatusSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisStorageK8sIoV1VolumeattributesclassesNameRoute = createRoute({
  method: 'get',
  path: '/apis/storage.k8s.io/v1/volumeattributesclasses/{name}',
  tags: ['storage_v1'],
  description: 'read the specified VolumeAttributesClass',
  operationId: 'readStorageV1VolumeAttributesClass',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the VolumeAttributesClass',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1VolumeAttributesClassSchema },
        'application/json': { schema: IoK8sApiStorageV1VolumeAttributesClassSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiStorageV1VolumeAttributesClassSchema,
        },
        'application/yaml': { schema: IoK8sApiStorageV1VolumeAttributesClassSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const putApisStorageK8sIoV1VolumeattributesclassesNameRoute = createRoute({
  method: 'put',
  path: '/apis/storage.k8s.io/v1/volumeattributesclasses/{name}',
  tags: ['storage_v1'],
  description: 'replace the specified VolumeAttributesClass',
  operationId: 'replaceStorageV1VolumeAttributesClass',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the VolumeAttributesClass',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldManager: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.',
            in: 'query',
            name: 'fieldManager',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldValidation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.',
            in: 'query',
            name: 'fieldValidation',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
    }),
    body: {
      content: { '*/*': { schema: IoK8sApiStorageV1VolumeAttributesClassSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1VolumeAttributesClassSchema },
        'application/json': { schema: IoK8sApiStorageV1VolumeAttributesClassSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiStorageV1VolumeAttributesClassSchema,
        },
        'application/yaml': { schema: IoK8sApiStorageV1VolumeAttributesClassSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1VolumeAttributesClassSchema },
        'application/json': { schema: IoK8sApiStorageV1VolumeAttributesClassSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiStorageV1VolumeAttributesClassSchema,
        },
        'application/yaml': { schema: IoK8sApiStorageV1VolumeAttributesClassSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const deleteApisStorageK8sIoV1VolumeattributesclassesNameRoute = createRoute({
  method: 'delete',
  path: '/apis/storage.k8s.io/v1/volumeattributesclasses/{name}',
  tags: ['storage_v1'],
  description: 'delete a VolumeAttributesClass',
  operationId: 'deleteStorageV1VolumeAttributesClass',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the VolumeAttributesClass',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      gracePeriodSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.',
            in: 'query',
            name: 'gracePeriodSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      ignoreStoreReadErrorWithClusterBreakingPotential: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it',
            in: 'query',
            name: 'ignoreStoreReadErrorWithClusterBreakingPotential',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      orphanDependents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object\'s finalizers list. Either this field or PropagationPolicy may be set, but not both.',
            in: 'query',
            name: 'orphanDependents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      propagationPolicy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.",
            in: 'query',
            name: 'propagationPolicy',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
    }),
    body: { content: { '*/*': { schema: IoK8sApimachineryPkgApisMetaV1DeleteOptionsSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1VolumeAttributesClassSchema },
        'application/json': { schema: IoK8sApiStorageV1VolumeAttributesClassSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiStorageV1VolumeAttributesClassSchema,
        },
        'application/yaml': { schema: IoK8sApiStorageV1VolumeAttributesClassSchema },
      },
    },
    202: {
      description: 'Accepted',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1VolumeAttributesClassSchema },
        'application/json': { schema: IoK8sApiStorageV1VolumeAttributesClassSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiStorageV1VolumeAttributesClassSchema,
        },
        'application/yaml': { schema: IoK8sApiStorageV1VolumeAttributesClassSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const patchApisStorageK8sIoV1VolumeattributesclassesNameRoute = createRoute({
  method: 'patch',
  path: '/apis/storage.k8s.io/v1/volumeattributesclasses/{name}',
  tags: ['storage_v1'],
  description: 'partially update the specified VolumeAttributesClass',
  operationId: 'patchStorageV1VolumeAttributesClass',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the VolumeAttributesClass',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
    query: z.object({
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldManager: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).',
            in: 'query',
            name: 'fieldManager',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldValidation: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.',
            in: 'query',
            name: 'fieldValidation',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.',
            in: 'query',
            name: 'force',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/apply-patch+cbor': { schema: IoK8sApimachineryPkgApisMetaV1PatchSchema },
        'application/apply-patch+yaml': { schema: IoK8sApimachineryPkgApisMetaV1PatchSchema },
        'application/json-patch+json': { schema: IoK8sApimachineryPkgApisMetaV1PatchSchema },
        'application/merge-patch+json': { schema: IoK8sApimachineryPkgApisMetaV1PatchSchema },
        'application/strategic-merge-patch+json': {
          schema: IoK8sApimachineryPkgApisMetaV1PatchSchema,
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1VolumeAttributesClassSchema },
        'application/json': { schema: IoK8sApiStorageV1VolumeAttributesClassSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiStorageV1VolumeAttributesClassSchema,
        },
        'application/yaml': { schema: IoK8sApiStorageV1VolumeAttributesClassSchema },
      },
    },
    201: {
      description: 'Created',
      content: {
        'application/cbor': { schema: IoK8sApiStorageV1VolumeAttributesClassSchema },
        'application/json': { schema: IoK8sApiStorageV1VolumeAttributesClassSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApiStorageV1VolumeAttributesClassSchema,
        },
        'application/yaml': { schema: IoK8sApiStorageV1VolumeAttributesClassSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisStorageK8sIoV1WatchCsidriversRoute = createRoute({
  method: 'get',
  path: '/apis/storage.k8s.io/v1/watch/csidrivers',
  tags: ['storage_v1'],
  description:
    "watch individual changes to a list of CSIDriver. deprecated: use the 'watch' parameter with a list operation instead.",
  operationId: 'watchStorageV1CSIDriverList',
  request: {
    query: z.object({
      allowWatchBookmarks: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\'s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.',
            in: 'query',
            name: 'allowWatchBookmarks',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      continue: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".\n\nThis field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.',
            in: 'query',
            name: 'continue',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their fields. Defaults to everything.',
            in: 'query',
            name: 'fieldSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      labelSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their labels. Defaults to everything.',
            in: 'query',
            name: 'labelSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.\n\nThe server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersion',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersionMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersionMatch',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      sendInitialEvents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              '`sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.\n\nWhen `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan\n  is interpreted as "data at least as new as the provided `resourceVersion`"\n  and the bookmark event is send when the state is synced\n  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.\n  If `resourceVersion` is unset, this is interpreted as "consistent read" and the\n  bookmark event is send when the state is synced at least to the moment\n  when request started being processed.\n- `resourceVersionMatch` set to any other value or unset\n  Invalid error is returned.\n\nDefaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.',
            in: 'query',
            name: 'sendInitialEvents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      shardSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:\n\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n\nField paths use CEL-style object-rooted syntax (e.g. \"object.metadata.uid\"), NOT the fieldSelector format (\"metadata.uid\"). Currently supported paths:\n  - object.metadata.uid\n  - object.metadata.namespace\n\nhexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.\n\nExamples:\n  2-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n  4-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')\n    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')\n    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')\n\nThis is a beta field and is enabled by default via the ShardedListAndWatch feature gate.",
            in: 'query',
            name: 'shardSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      timeoutSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.',
            in: 'query',
            name: 'timeoutSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      watch: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.',
            in: 'query',
            name: 'watch',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/cbor-seq': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/json': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/json;stream=watch': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
        },
        'application/vnd.kubernetes.protobuf;stream=watch': {
          schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
        },
        'application/yaml': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisStorageK8sIoV1WatchCsidriversNameRoute = createRoute({
  method: 'get',
  path: '/apis/storage.k8s.io/v1/watch/csidrivers/{name}',
  tags: ['storage_v1'],
  description:
    "watch changes to an object of kind CSIDriver. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.",
  operationId: 'watchStorageV1CSIDriver',
  request: {
    query: z.object({
      allowWatchBookmarks: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\'s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.',
            in: 'query',
            name: 'allowWatchBookmarks',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      continue: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".\n\nThis field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.',
            in: 'query',
            name: 'continue',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their fields. Defaults to everything.',
            in: 'query',
            name: 'fieldSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      labelSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their labels. Defaults to everything.',
            in: 'query',
            name: 'labelSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.\n\nThe server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersion',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersionMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersionMatch',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      sendInitialEvents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              '`sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.\n\nWhen `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan\n  is interpreted as "data at least as new as the provided `resourceVersion`"\n  and the bookmark event is send when the state is synced\n  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.\n  If `resourceVersion` is unset, this is interpreted as "consistent read" and the\n  bookmark event is send when the state is synced at least to the moment\n  when request started being processed.\n- `resourceVersionMatch` set to any other value or unset\n  Invalid error is returned.\n\nDefaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.',
            in: 'query',
            name: 'sendInitialEvents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      shardSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:\n\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n\nField paths use CEL-style object-rooted syntax (e.g. \"object.metadata.uid\"), NOT the fieldSelector format (\"metadata.uid\"). Currently supported paths:\n  - object.metadata.uid\n  - object.metadata.namespace\n\nhexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.\n\nExamples:\n  2-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n  4-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')\n    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')\n    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')\n\nThis is a beta field and is enabled by default via the ShardedListAndWatch feature gate.",
            in: 'query',
            name: 'shardSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      timeoutSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.',
            in: 'query',
            name: 'timeoutSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      watch: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.',
            in: 'query',
            name: 'watch',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the CSIDriver',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/cbor-seq': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/json': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/json;stream=watch': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
        },
        'application/vnd.kubernetes.protobuf;stream=watch': {
          schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
        },
        'application/yaml': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisStorageK8sIoV1WatchCsinodesRoute = createRoute({
  method: 'get',
  path: '/apis/storage.k8s.io/v1/watch/csinodes',
  tags: ['storage_v1'],
  description:
    "watch individual changes to a list of CSINode. deprecated: use the 'watch' parameter with a list operation instead.",
  operationId: 'watchStorageV1CSINodeList',
  request: {
    query: z.object({
      allowWatchBookmarks: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\'s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.',
            in: 'query',
            name: 'allowWatchBookmarks',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      continue: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".\n\nThis field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.',
            in: 'query',
            name: 'continue',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their fields. Defaults to everything.',
            in: 'query',
            name: 'fieldSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      labelSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their labels. Defaults to everything.',
            in: 'query',
            name: 'labelSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.\n\nThe server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersion',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersionMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersionMatch',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      sendInitialEvents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              '`sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.\n\nWhen `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan\n  is interpreted as "data at least as new as the provided `resourceVersion`"\n  and the bookmark event is send when the state is synced\n  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.\n  If `resourceVersion` is unset, this is interpreted as "consistent read" and the\n  bookmark event is send when the state is synced at least to the moment\n  when request started being processed.\n- `resourceVersionMatch` set to any other value or unset\n  Invalid error is returned.\n\nDefaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.',
            in: 'query',
            name: 'sendInitialEvents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      shardSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:\n\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n\nField paths use CEL-style object-rooted syntax (e.g. \"object.metadata.uid\"), NOT the fieldSelector format (\"metadata.uid\"). Currently supported paths:\n  - object.metadata.uid\n  - object.metadata.namespace\n\nhexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.\n\nExamples:\n  2-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n  4-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')\n    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')\n    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')\n\nThis is a beta field and is enabled by default via the ShardedListAndWatch feature gate.",
            in: 'query',
            name: 'shardSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      timeoutSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.',
            in: 'query',
            name: 'timeoutSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      watch: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.',
            in: 'query',
            name: 'watch',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/cbor-seq': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/json': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/json;stream=watch': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
        },
        'application/vnd.kubernetes.protobuf;stream=watch': {
          schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
        },
        'application/yaml': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisStorageK8sIoV1WatchCsinodesNameRoute = createRoute({
  method: 'get',
  path: '/apis/storage.k8s.io/v1/watch/csinodes/{name}',
  tags: ['storage_v1'],
  description:
    "watch changes to an object of kind CSINode. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.",
  operationId: 'watchStorageV1CSINode',
  request: {
    query: z.object({
      allowWatchBookmarks: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\'s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.',
            in: 'query',
            name: 'allowWatchBookmarks',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      continue: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".\n\nThis field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.',
            in: 'query',
            name: 'continue',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their fields. Defaults to everything.',
            in: 'query',
            name: 'fieldSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      labelSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their labels. Defaults to everything.',
            in: 'query',
            name: 'labelSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.\n\nThe server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersion',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersionMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersionMatch',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      sendInitialEvents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              '`sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.\n\nWhen `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan\n  is interpreted as "data at least as new as the provided `resourceVersion`"\n  and the bookmark event is send when the state is synced\n  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.\n  If `resourceVersion` is unset, this is interpreted as "consistent read" and the\n  bookmark event is send when the state is synced at least to the moment\n  when request started being processed.\n- `resourceVersionMatch` set to any other value or unset\n  Invalid error is returned.\n\nDefaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.',
            in: 'query',
            name: 'sendInitialEvents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      shardSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:\n\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n\nField paths use CEL-style object-rooted syntax (e.g. \"object.metadata.uid\"), NOT the fieldSelector format (\"metadata.uid\"). Currently supported paths:\n  - object.metadata.uid\n  - object.metadata.namespace\n\nhexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.\n\nExamples:\n  2-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n  4-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')\n    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')\n    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')\n\nThis is a beta field and is enabled by default via the ShardedListAndWatch feature gate.",
            in: 'query',
            name: 'shardSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      timeoutSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.',
            in: 'query',
            name: 'timeoutSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      watch: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.',
            in: 'query',
            name: 'watch',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the CSINode',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/cbor-seq': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/json': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/json;stream=watch': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
        },
        'application/vnd.kubernetes.protobuf;stream=watch': {
          schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
        },
        'application/yaml': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisStorageK8sIoV1WatchCsistoragecapacitiesRoute = createRoute({
  method: 'get',
  path: '/apis/storage.k8s.io/v1/watch/csistoragecapacities',
  tags: ['storage_v1'],
  description:
    "watch individual changes to a list of CSIStorageCapacity. deprecated: use the 'watch' parameter with a list operation instead.",
  operationId: 'watchStorageV1CSIStorageCapacityListForAllNamespaces',
  request: {
    query: z.object({
      allowWatchBookmarks: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\'s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.',
            in: 'query',
            name: 'allowWatchBookmarks',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      continue: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".\n\nThis field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.',
            in: 'query',
            name: 'continue',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their fields. Defaults to everything.',
            in: 'query',
            name: 'fieldSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      labelSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their labels. Defaults to everything.',
            in: 'query',
            name: 'labelSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.\n\nThe server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersion',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersionMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersionMatch',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      sendInitialEvents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              '`sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.\n\nWhen `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan\n  is interpreted as "data at least as new as the provided `resourceVersion`"\n  and the bookmark event is send when the state is synced\n  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.\n  If `resourceVersion` is unset, this is interpreted as "consistent read" and the\n  bookmark event is send when the state is synced at least to the moment\n  when request started being processed.\n- `resourceVersionMatch` set to any other value or unset\n  Invalid error is returned.\n\nDefaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.',
            in: 'query',
            name: 'sendInitialEvents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      shardSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:\n\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n\nField paths use CEL-style object-rooted syntax (e.g. \"object.metadata.uid\"), NOT the fieldSelector format (\"metadata.uid\"). Currently supported paths:\n  - object.metadata.uid\n  - object.metadata.namespace\n\nhexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.\n\nExamples:\n  2-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n  4-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')\n    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')\n    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')\n\nThis is a beta field and is enabled by default via the ShardedListAndWatch feature gate.",
            in: 'query',
            name: 'shardSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      timeoutSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.',
            in: 'query',
            name: 'timeoutSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      watch: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.',
            in: 'query',
            name: 'watch',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/cbor-seq': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/json': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/json;stream=watch': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
        },
        'application/vnd.kubernetes.protobuf;stream=watch': {
          schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
        },
        'application/yaml': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisStorageK8sIoV1WatchNamespacesNamespaceCsistoragecapacitiesRoute = createRoute({
  method: 'get',
  path: '/apis/storage.k8s.io/v1/watch/namespaces/{namespace}/csistoragecapacities',
  tags: ['storage_v1'],
  description:
    "watch individual changes to a list of CSIStorageCapacity. deprecated: use the 'watch' parameter with a list operation instead.",
  operationId: 'watchStorageV1NamespacedCSIStorageCapacityList',
  request: {
    query: z.object({
      allowWatchBookmarks: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\'s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.',
            in: 'query',
            name: 'allowWatchBookmarks',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      continue: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".\n\nThis field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.',
            in: 'query',
            name: 'continue',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their fields. Defaults to everything.',
            in: 'query',
            name: 'fieldSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      labelSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their labels. Defaults to everything.',
            in: 'query',
            name: 'labelSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.\n\nThe server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersion',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersionMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersionMatch',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      sendInitialEvents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              '`sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.\n\nWhen `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan\n  is interpreted as "data at least as new as the provided `resourceVersion`"\n  and the bookmark event is send when the state is synced\n  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.\n  If `resourceVersion` is unset, this is interpreted as "consistent read" and the\n  bookmark event is send when the state is synced at least to the moment\n  when request started being processed.\n- `resourceVersionMatch` set to any other value or unset\n  Invalid error is returned.\n\nDefaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.',
            in: 'query',
            name: 'sendInitialEvents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      shardSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:\n\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n\nField paths use CEL-style object-rooted syntax (e.g. \"object.metadata.uid\"), NOT the fieldSelector format (\"metadata.uid\"). Currently supported paths:\n  - object.metadata.uid\n  - object.metadata.namespace\n\nhexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.\n\nExamples:\n  2-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n  4-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')\n    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')\n    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')\n\nThis is a beta field and is enabled by default via the ShardedListAndWatch feature gate.",
            in: 'query',
            name: 'shardSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      timeoutSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.',
            in: 'query',
            name: 'timeoutSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      watch: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.',
            in: 'query',
            name: 'watch',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
    }),
    params: z.object({
      namespace: z
        .string()
        .openapi({
          param: {
            description: 'object name and auth scope, such as for teams and projects',
            in: 'path',
            name: 'namespace',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/cbor-seq': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/json': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/json;stream=watch': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
        },
        'application/vnd.kubernetes.protobuf;stream=watch': {
          schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
        },
        'application/yaml': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisStorageK8sIoV1WatchNamespacesNamespaceCsistoragecapacitiesNameRoute =
  createRoute({
    method: 'get',
    path: '/apis/storage.k8s.io/v1/watch/namespaces/{namespace}/csistoragecapacities/{name}',
    tags: ['storage_v1'],
    description:
      "watch changes to an object of kind CSIStorageCapacity. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.",
    operationId: 'watchStorageV1NamespacedCSIStorageCapacity',
    request: {
      query: z.object({
        allowWatchBookmarks: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              description:
                'allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\'s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.',
              in: 'query',
              name: 'allowWatchBookmarks',
              schema: { type: 'boolean', uniqueItems: true },
              required: false,
            },
          }),
        continue: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".\n\nThis field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.',
              in: 'query',
              name: 'continue',
              schema: { type: 'string', uniqueItems: true },
              required: false,
            },
          }),
        fieldSelector: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'A selector to restrict the list of returned objects by their fields. Defaults to everything.',
              in: 'query',
              name: 'fieldSelector',
              schema: { type: 'string', uniqueItems: true },
              required: false,
            },
          }),
        labelSelector: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'A selector to restrict the list of returned objects by their labels. Defaults to everything.',
              in: 'query',
              name: 'labelSelector',
              schema: { type: 'string', uniqueItems: true },
              required: false,
            },
          }),
        limit: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .exactOptional()
          .openapi({
            param: {
              description:
                'limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.\n\nThe server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.',
              in: 'query',
              name: 'limit',
              schema: { type: 'integer', uniqueItems: true },
              required: false,
            },
          }),
        pretty: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
              in: 'query',
              name: 'pretty',
              schema: { type: 'string', uniqueItems: true },
              required: false,
            },
          }),
        resourceVersion: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
              in: 'query',
              name: 'resourceVersion',
              schema: { type: 'string', uniqueItems: true },
              required: false,
            },
          }),
        resourceVersionMatch: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
              in: 'query',
              name: 'resourceVersionMatch',
              schema: { type: 'string', uniqueItems: true },
              required: false,
            },
          }),
        sendInitialEvents: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              description:
                '`sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.\n\nWhen `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan\n  is interpreted as "data at least as new as the provided `resourceVersion`"\n  and the bookmark event is send when the state is synced\n  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.\n  If `resourceVersion` is unset, this is interpreted as "consistent read" and the\n  bookmark event is send when the state is synced at least to the moment\n  when request started being processed.\n- `resourceVersionMatch` set to any other value or unset\n  Invalid error is returned.\n\nDefaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.',
              in: 'query',
              name: 'sendInitialEvents',
              schema: { type: 'boolean', uniqueItems: true },
              required: false,
            },
          }),
        shardSelector: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                "shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:\n\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n\nField paths use CEL-style object-rooted syntax (e.g. \"object.metadata.uid\"), NOT the fieldSelector format (\"metadata.uid\"). Currently supported paths:\n  - object.metadata.uid\n  - object.metadata.namespace\n\nhexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.\n\nExamples:\n  2-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n  4-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')\n    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')\n    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')\n\nThis is a beta field and is enabled by default via the ShardedListAndWatch feature gate.",
              in: 'query',
              name: 'shardSelector',
              schema: { type: 'string', uniqueItems: true },
              required: false,
            },
          }),
        timeoutSeconds: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .exactOptional()
          .openapi({
            param: {
              description:
                'Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.',
              in: 'query',
              name: 'timeoutSeconds',
              schema: { type: 'integer', uniqueItems: true },
              required: false,
            },
          }),
        watch: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              description:
                'Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.',
              in: 'query',
              name: 'watch',
              schema: { type: 'boolean', uniqueItems: true },
              required: false,
            },
          }),
      }),
      params: z.object({
        name: z
          .string()
          .openapi({
            param: {
              description: 'name of the CSIStorageCapacity',
              in: 'path',
              name: 'name',
              required: true,
              schema: { type: 'string', uniqueItems: true },
            },
          }),
        namespace: z
          .string()
          .openapi({
            param: {
              description: 'object name and auth scope, such as for teams and projects',
              in: 'path',
              name: 'namespace',
              required: true,
              schema: { type: 'string', uniqueItems: true },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/cbor': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
          'application/cbor-seq': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
          'application/json': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
          'application/json;stream=watch': {
            schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
          },
          'application/vnd.kubernetes.protobuf': {
            schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
          },
          'application/vnd.kubernetes.protobuf;stream=watch': {
            schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
          },
          'application/yaml': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        },
      },
      401: { description: 'Unauthorized' },
    },
  })

export const getApisStorageK8sIoV1WatchStorageclassesRoute = createRoute({
  method: 'get',
  path: '/apis/storage.k8s.io/v1/watch/storageclasses',
  tags: ['storage_v1'],
  description:
    "watch individual changes to a list of StorageClass. deprecated: use the 'watch' parameter with a list operation instead.",
  operationId: 'watchStorageV1StorageClassList',
  request: {
    query: z.object({
      allowWatchBookmarks: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\'s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.',
            in: 'query',
            name: 'allowWatchBookmarks',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      continue: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".\n\nThis field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.',
            in: 'query',
            name: 'continue',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their fields. Defaults to everything.',
            in: 'query',
            name: 'fieldSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      labelSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their labels. Defaults to everything.',
            in: 'query',
            name: 'labelSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.\n\nThe server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersion',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersionMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersionMatch',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      sendInitialEvents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              '`sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.\n\nWhen `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan\n  is interpreted as "data at least as new as the provided `resourceVersion`"\n  and the bookmark event is send when the state is synced\n  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.\n  If `resourceVersion` is unset, this is interpreted as "consistent read" and the\n  bookmark event is send when the state is synced at least to the moment\n  when request started being processed.\n- `resourceVersionMatch` set to any other value or unset\n  Invalid error is returned.\n\nDefaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.',
            in: 'query',
            name: 'sendInitialEvents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      shardSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:\n\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n\nField paths use CEL-style object-rooted syntax (e.g. \"object.metadata.uid\"), NOT the fieldSelector format (\"metadata.uid\"). Currently supported paths:\n  - object.metadata.uid\n  - object.metadata.namespace\n\nhexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.\n\nExamples:\n  2-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n  4-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')\n    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')\n    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')\n\nThis is a beta field and is enabled by default via the ShardedListAndWatch feature gate.",
            in: 'query',
            name: 'shardSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      timeoutSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.',
            in: 'query',
            name: 'timeoutSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      watch: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.',
            in: 'query',
            name: 'watch',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/cbor-seq': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/json': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/json;stream=watch': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
        },
        'application/vnd.kubernetes.protobuf;stream=watch': {
          schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
        },
        'application/yaml': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisStorageK8sIoV1WatchStorageclassesNameRoute = createRoute({
  method: 'get',
  path: '/apis/storage.k8s.io/v1/watch/storageclasses/{name}',
  tags: ['storage_v1'],
  description:
    "watch changes to an object of kind StorageClass. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.",
  operationId: 'watchStorageV1StorageClass',
  request: {
    query: z.object({
      allowWatchBookmarks: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\'s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.',
            in: 'query',
            name: 'allowWatchBookmarks',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      continue: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".\n\nThis field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.',
            in: 'query',
            name: 'continue',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their fields. Defaults to everything.',
            in: 'query',
            name: 'fieldSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      labelSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their labels. Defaults to everything.',
            in: 'query',
            name: 'labelSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.\n\nThe server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersion',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersionMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersionMatch',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      sendInitialEvents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              '`sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.\n\nWhen `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan\n  is interpreted as "data at least as new as the provided `resourceVersion`"\n  and the bookmark event is send when the state is synced\n  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.\n  If `resourceVersion` is unset, this is interpreted as "consistent read" and the\n  bookmark event is send when the state is synced at least to the moment\n  when request started being processed.\n- `resourceVersionMatch` set to any other value or unset\n  Invalid error is returned.\n\nDefaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.',
            in: 'query',
            name: 'sendInitialEvents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      shardSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:\n\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n\nField paths use CEL-style object-rooted syntax (e.g. \"object.metadata.uid\"), NOT the fieldSelector format (\"metadata.uid\"). Currently supported paths:\n  - object.metadata.uid\n  - object.metadata.namespace\n\nhexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.\n\nExamples:\n  2-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n  4-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')\n    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')\n    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')\n\nThis is a beta field and is enabled by default via the ShardedListAndWatch feature gate.",
            in: 'query',
            name: 'shardSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      timeoutSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.',
            in: 'query',
            name: 'timeoutSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      watch: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.',
            in: 'query',
            name: 'watch',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the StorageClass',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/cbor-seq': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/json': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/json;stream=watch': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
        },
        'application/vnd.kubernetes.protobuf;stream=watch': {
          schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
        },
        'application/yaml': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisStorageK8sIoV1WatchVolumeattachmentsRoute = createRoute({
  method: 'get',
  path: '/apis/storage.k8s.io/v1/watch/volumeattachments',
  tags: ['storage_v1'],
  description:
    "watch individual changes to a list of VolumeAttachment. deprecated: use the 'watch' parameter with a list operation instead.",
  operationId: 'watchStorageV1VolumeAttachmentList',
  request: {
    query: z.object({
      allowWatchBookmarks: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\'s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.',
            in: 'query',
            name: 'allowWatchBookmarks',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      continue: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".\n\nThis field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.',
            in: 'query',
            name: 'continue',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their fields. Defaults to everything.',
            in: 'query',
            name: 'fieldSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      labelSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their labels. Defaults to everything.',
            in: 'query',
            name: 'labelSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.\n\nThe server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersion',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersionMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersionMatch',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      sendInitialEvents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              '`sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.\n\nWhen `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan\n  is interpreted as "data at least as new as the provided `resourceVersion`"\n  and the bookmark event is send when the state is synced\n  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.\n  If `resourceVersion` is unset, this is interpreted as "consistent read" and the\n  bookmark event is send when the state is synced at least to the moment\n  when request started being processed.\n- `resourceVersionMatch` set to any other value or unset\n  Invalid error is returned.\n\nDefaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.',
            in: 'query',
            name: 'sendInitialEvents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      shardSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:\n\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n\nField paths use CEL-style object-rooted syntax (e.g. \"object.metadata.uid\"), NOT the fieldSelector format (\"metadata.uid\"). Currently supported paths:\n  - object.metadata.uid\n  - object.metadata.namespace\n\nhexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.\n\nExamples:\n  2-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n  4-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')\n    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')\n    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')\n\nThis is a beta field and is enabled by default via the ShardedListAndWatch feature gate.",
            in: 'query',
            name: 'shardSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      timeoutSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.',
            in: 'query',
            name: 'timeoutSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      watch: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.',
            in: 'query',
            name: 'watch',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/cbor-seq': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/json': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/json;stream=watch': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
        },
        'application/vnd.kubernetes.protobuf;stream=watch': {
          schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
        },
        'application/yaml': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisStorageK8sIoV1WatchVolumeattachmentsNameRoute = createRoute({
  method: 'get',
  path: '/apis/storage.k8s.io/v1/watch/volumeattachments/{name}',
  tags: ['storage_v1'],
  description:
    "watch changes to an object of kind VolumeAttachment. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.",
  operationId: 'watchStorageV1VolumeAttachment',
  request: {
    query: z.object({
      allowWatchBookmarks: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\'s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.',
            in: 'query',
            name: 'allowWatchBookmarks',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      continue: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".\n\nThis field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.',
            in: 'query',
            name: 'continue',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their fields. Defaults to everything.',
            in: 'query',
            name: 'fieldSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      labelSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their labels. Defaults to everything.',
            in: 'query',
            name: 'labelSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.\n\nThe server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersion',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersionMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersionMatch',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      sendInitialEvents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              '`sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.\n\nWhen `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan\n  is interpreted as "data at least as new as the provided `resourceVersion`"\n  and the bookmark event is send when the state is synced\n  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.\n  If `resourceVersion` is unset, this is interpreted as "consistent read" and the\n  bookmark event is send when the state is synced at least to the moment\n  when request started being processed.\n- `resourceVersionMatch` set to any other value or unset\n  Invalid error is returned.\n\nDefaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.',
            in: 'query',
            name: 'sendInitialEvents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      shardSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:\n\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n\nField paths use CEL-style object-rooted syntax (e.g. \"object.metadata.uid\"), NOT the fieldSelector format (\"metadata.uid\"). Currently supported paths:\n  - object.metadata.uid\n  - object.metadata.namespace\n\nhexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.\n\nExamples:\n  2-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n  4-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')\n    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')\n    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')\n\nThis is a beta field and is enabled by default via the ShardedListAndWatch feature gate.",
            in: 'query',
            name: 'shardSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      timeoutSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.',
            in: 'query',
            name: 'timeoutSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      watch: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.',
            in: 'query',
            name: 'watch',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the VolumeAttachment',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/cbor-seq': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/json': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/json;stream=watch': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
        },
        'application/vnd.kubernetes.protobuf;stream=watch': {
          schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
        },
        'application/yaml': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisStorageK8sIoV1WatchVolumeattributesclassesRoute = createRoute({
  method: 'get',
  path: '/apis/storage.k8s.io/v1/watch/volumeattributesclasses',
  tags: ['storage_v1'],
  description:
    "watch individual changes to a list of VolumeAttributesClass. deprecated: use the 'watch' parameter with a list operation instead.",
  operationId: 'watchStorageV1VolumeAttributesClassList',
  request: {
    query: z.object({
      allowWatchBookmarks: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\'s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.',
            in: 'query',
            name: 'allowWatchBookmarks',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      continue: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".\n\nThis field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.',
            in: 'query',
            name: 'continue',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their fields. Defaults to everything.',
            in: 'query',
            name: 'fieldSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      labelSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their labels. Defaults to everything.',
            in: 'query',
            name: 'labelSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.\n\nThe server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersion',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersionMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersionMatch',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      sendInitialEvents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              '`sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.\n\nWhen `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan\n  is interpreted as "data at least as new as the provided `resourceVersion`"\n  and the bookmark event is send when the state is synced\n  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.\n  If `resourceVersion` is unset, this is interpreted as "consistent read" and the\n  bookmark event is send when the state is synced at least to the moment\n  when request started being processed.\n- `resourceVersionMatch` set to any other value or unset\n  Invalid error is returned.\n\nDefaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.',
            in: 'query',
            name: 'sendInitialEvents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      shardSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:\n\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n\nField paths use CEL-style object-rooted syntax (e.g. \"object.metadata.uid\"), NOT the fieldSelector format (\"metadata.uid\"). Currently supported paths:\n  - object.metadata.uid\n  - object.metadata.namespace\n\nhexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.\n\nExamples:\n  2-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n  4-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')\n    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')\n    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')\n\nThis is a beta field and is enabled by default via the ShardedListAndWatch feature gate.",
            in: 'query',
            name: 'shardSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      timeoutSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.',
            in: 'query',
            name: 'timeoutSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      watch: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.',
            in: 'query',
            name: 'watch',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/cbor-seq': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/json': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/json;stream=watch': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
        },
        'application/vnd.kubernetes.protobuf;stream=watch': {
          schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
        },
        'application/yaml': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})

export const getApisStorageK8sIoV1WatchVolumeattributesclassesNameRoute = createRoute({
  method: 'get',
  path: '/apis/storage.k8s.io/v1/watch/volumeattributesclasses/{name}',
  tags: ['storage_v1'],
  description:
    "watch changes to an object of kind VolumeAttributesClass. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.",
  operationId: 'watchStorageV1VolumeAttributesClass',
  request: {
    query: z.object({
      allowWatchBookmarks: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\'s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.',
            in: 'query',
            name: 'allowWatchBookmarks',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      continue: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".\n\nThis field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.',
            in: 'query',
            name: 'continue',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      fieldSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their fields. Defaults to everything.',
            in: 'query',
            name: 'fieldSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      labelSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A selector to restrict the list of returned objects by their labels. Defaults to everything.',
            in: 'query',
            name: 'labelSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.\n\nThe server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.',
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      pretty: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).",
            in: 'query',
            name: 'pretty',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersion',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      resourceVersionMatch: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.\n\nDefaults to unset',
            in: 'query',
            name: 'resourceVersionMatch',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      sendInitialEvents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              '`sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.\n\nWhen `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan\n  is interpreted as "data at least as new as the provided `resourceVersion`"\n  and the bookmark event is send when the state is synced\n  to a `resourceVersion` at least as fresh as the one provided by the ListOptions.\n  If `resourceVersion` is unset, this is interpreted as "consistent read" and the\n  bookmark event is send when the state is synced at least to the moment\n  when request started being processed.\n- `resourceVersionMatch` set to any other value or unset\n  Invalid error is returned.\n\nDefaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.',
            in: 'query',
            name: 'sendInitialEvents',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
      shardSelector: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "shardSelector restricts the list of returned objects using a CEL-based shard selector expression. The format uses the shardRange() function combined with || (logical OR) to specify one or more hash ranges:\n\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000')\n  shardRange(object.metadata.uid, '0x0', '0x8000000000000000') || shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n\nField paths use CEL-style object-rooted syntax (e.g. \"object.metadata.uid\"), NOT the fieldSelector format (\"metadata.uid\"). Currently supported paths:\n  - object.metadata.uid\n  - object.metadata.namespace\n\nhexStart and hexEnd are single-quoted CEL string literals with a '0x' prefix, defining the inclusive lower and exclusive upper bounds over the 64-bit FNV-1a hash space. The full range is [0x0, 0x10000000000000000), where the exclusive upper bound equals 2^64.\n\nExamples:\n  2-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x8000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x8000000000000000', '0x10000000000000000')\n  4-shard split:\n    shard 0: shardRange(object.metadata.uid, '0x0000000000000000', '0x4000000000000000')\n    shard 1: shardRange(object.metadata.uid, '0x4000000000000000', '0x8000000000000000')\n    shard 2: shardRange(object.metadata.uid, '0x8000000000000000', '0xc000000000000000')\n    shard 3: shardRange(object.metadata.uid, '0xc000000000000000', '0x10000000000000000')\n\nThis is a beta field and is enabled by default via the ShardedListAndWatch feature gate.",
            in: 'query',
            name: 'shardSelector',
            schema: { type: 'string', uniqueItems: true },
            required: false,
          },
        }),
      timeoutSeconds: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.',
            in: 'query',
            name: 'timeoutSeconds',
            schema: { type: 'integer', uniqueItems: true },
            required: false,
          },
        }),
      watch: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.',
            in: 'query',
            name: 'watch',
            schema: { type: 'boolean', uniqueItems: true },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'name of the VolumeAttributesClass',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string', uniqueItems: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/cbor': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/cbor-seq': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/json': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/json;stream=watch': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
        'application/vnd.kubernetes.protobuf': {
          schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
        },
        'application/vnd.kubernetes.protobuf;stream=watch': {
          schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema,
        },
        'application/yaml': { schema: IoK8sApimachineryPkgApisMetaV1WatchEventSchema },
      },
    },
    401: { description: 'Unauthorized' },
  },
})
