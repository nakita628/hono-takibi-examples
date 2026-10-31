import { createRoute, z } from '@hono/zod-openapi'

const AptRepositorySchema = z
  .object({
    archiveType: z
      .enum(['ARCHIVE_TYPE_UNSPECIFIED', 'DEB', 'DEB_SRC'])
      .exactOptional()
      .openapi({
        description: 'Type of archive files in this repository. The default behavior is DEB.',
      }),
    components: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. List of components for this repository. Must contain at least one item.',
      }),
    distribution: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Distribution of this repository.' }),
    gpgKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URI of the key file for this repository. The agent maintains a keyring at `/etc/apt/trusted.gpg.d/osconfig_agent_managed.gpg` containing all the keys in any applied guest policy.',
      }),
    uri: z.string().exactOptional().openapi({ description: 'Required. URI for this repository.' }),
  })
  .openapi({
    description:
      'Represents a single Apt package repository. This repository is added to a repo file that is stored at `/etc/apt/sources.list.d/google_osconfig.list`.',
    required: [],
  })
  .openapi('AptRepository')

const AptSettingsSchema = z
  .object({
    excludes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'List of packages to exclude from update. These packages will be excluded',
      }),
    exclusivePackages: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'An exclusive list of packages to be updated. These are the only packages that will be updated. If these packages are not installed, they will be ignored. This field cannot be specified with any other patch configuration fields.',
      }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'DIST', 'UPGRADE'])
      .exactOptional()
      .openapi({
        description:
          'By changing the type to DIST, the patching is performed using `apt-get dist-upgrade` instead.',
      }),
  })
  .openapi({
    description:
      'Apt patching is completed by executing `apt-get update && apt-get upgrade`. Additional options can be set to control how this is executed.',
    required: [],
  })
  .openapi('AptSettings')

const AssignmentGroupLabelSchema = z
  .object({
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Google Compute Engine instance labels that must be present for an instance to be included in this assignment group.',
      }),
  })
  .openapi({
    description:
      'Represents a group of VM intances that can be identified as having all these labels, for example "env=prod and app=web".',
    required: [],
  })
  .openapi('AssignmentGroupLabel')

const AssignmentOsTypeSchema = z
  .object({
    osArchitecture: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Targets VM instances with OS Inventory enabled and having the following OS architecture.',
      }),
    osShortName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Targets VM instances with OS Inventory enabled and having the following OS short name, for example "debian" or "windows".',
      }),
    osVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Targets VM instances with OS Inventory enabled and having the following following OS version.',
      }),
  })
  .openapi({
    description: 'Defines the criteria for selecting VM Instances by OS type.',
    required: [],
  })
  .openapi('AssignmentOsType')

const AssignmentSchema = z
  .object({
    groupLabels: z
      .array(AssignmentGroupLabelSchema)
      .exactOptional()
      .openapi({
        description:
          'Targets instances matching at least one of these label sets. This allows an assignment to target disparate groups, for example "env=prod or env=staging".',
      }),
    instanceNamePrefixes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Targets VM instances whose name starts with one of these prefixes. Like labels, this is another way to group VM instances when targeting configs, for example prefix="prod-". Only supported for project-level policies.',
      }),
    instances: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Targets any of the instances specified. Instances are specified by their URI in the form `zones/[ZONE]/instances/[INSTANCE_NAME]`. Instance targeting is uncommon and is supported to facilitate the management of changes by the instance or to target specific VM instances for development and testing. Only supported for project-level policies and must reference instances within this project.',
      }),
    osTypes: z
      .array(AssignmentOsTypeSchema)
      .exactOptional()
      .openapi({
        description:
          'Targets VM instances matching at least one of the following OS types. VM instances must match all supplied criteria for a given OsType to be included.',
      }),
    zones: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Targets instances in any of these zones. Leave empty to target instances in any zone. Zonal targeting is uncommon and is supported to facilitate the management of changes by zone.',
      }),
  })
  .openapi({
    description:
      'An assignment represents the group or groups of VM instances that the policy applies to. If an assignment is empty, it applies to all VM instances. Otherwise, the targeted VM instances must meet all the criteria specified. So if both labels and zones are specified, the policy applies to VM instances with those labels and in those zones.',
    required: [],
  })
  .openapi('Assignment')

const CancelPatchJobRequestSchema = z
  .object({})
  .openapi({ description: 'Message for canceling a patch job.' })
  .openapi('CancelPatchJobRequest')

const GooRepositorySchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The name of the repository.' }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The url of the repository.' }),
  })
  .openapi({
    description:
      'Represents a Goo package repository. These is added to a repo file that is stored at C:/ProgramData/GooGet/repos/google_osconfig.repo.',
    required: [],
  })
  .openapi('GooRepository')

const YumRepositorySchema = z
  .object({
    baseUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The location of the repository directory.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The display name of the repository.' }),
    gpgKeys: z.array(z.string()).exactOptional().openapi({ description: 'URIs of GPG keys.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. A one word, unique name for this repository. This is the `repo id` in the Yum config file and also the `display_name` if `display_name` is omitted. This id is also used as the unique identifier when checking for guest policy conflicts.',
      }),
  })
  .openapi({
    description:
      'Represents a single Yum package repository. This repository is added to a repo file that is stored at `/etc/yum.repos.d/google_osconfig.repo`.',
    required: [],
  })
  .openapi('YumRepository')

const ZypperRepositorySchema = z
  .object({
    baseUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The location of the repository directory.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The display name of the repository.' }),
    gpgKeys: z.array(z.string()).exactOptional().openapi({ description: 'URIs of GPG keys.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. A one word, unique name for this repository. This is the `repo id` in the zypper config file and also the `display_name` if `display_name` is omitted. This id is also used as the unique identifier when checking for guest policy conflicts.',
      }),
  })
  .openapi({
    description:
      'Represents a single Zypper package repository. This repository is added to a repo file that is stored at `/etc/zypp/repos.d/google_osconfig.repo`.',
    required: [],
  })
  .openapi('ZypperRepository')

const PackageRepositorySchema = z
  .object({
    apt: AptRepositorySchema.exactOptional().openapi({ description: 'An Apt Repository.' }),
    goo: GooRepositorySchema.exactOptional().openapi({ description: 'A Goo Repository.' }),
    yum: YumRepositorySchema.exactOptional().openapi({ description: 'A Yum Repository.' }),
    zypper: ZypperRepositorySchema.exactOptional().openapi({ description: 'A Zypper Repository.' }),
  })
  .openapi({ description: 'A package repository.', required: [] })
  .openapi('PackageRepository')

const EffectiveGuestPolicySourcedPackageRepositorySchema = z
  .object({
    packageRepository: PackageRepositorySchema.exactOptional().openapi({
      description: 'A software package repository to configure on the VM instance.',
    }),
    source: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the guest policy providing this config.' }),
  })
  .openapi({ description: 'A guest policy package repository including its source.', required: [] })
  .openapi('EffectiveGuestPolicySourcedPackageRepository')

const PackageSchema = z
  .object({
    desiredState: z
      .enum(['DESIRED_STATE_UNSPECIFIED', 'INSTALLED', 'UPDATED', 'REMOVED'])
      .exactOptional()
      .openapi({
        description:
          'The desired_state the agent should maintain for this package. The default is to ensure the package is installed.',
      }),
    manager: z
      .enum(['MANAGER_UNSPECIFIED', 'ANY', 'APT', 'YUM', 'ZYPPER', 'GOO'])
      .exactOptional()
      .openapi({
        description:
          'Type of package manager that can be used to install this package. If a system does not have the package manager, the package is not installed or removed no error message is returned. By default, or if you specify `ANY`, the agent attempts to install and remove this package using the default package manager. This is useful when creating a policy that applies to different types of systems. The default behavior is ANY.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The name of the package. A package is uniquely identified for conflict validation by checking the package name and the manager(s) that the package targets.',
      }),
  })
  .openapi({
    description:
      'Package is a reference to the software package to be installed or removed. The agent on the VM instance uses the system package manager to apply the config. These are the commands that the agent uses to install or remove packages. Apt install: `apt-get update && apt-get -y install package1 package2 package3` remove: `apt-get -y remove package1 package2 package3` Yum install: `yum -y install package1 package2 package3` remove: `yum -y remove package1 package2 package3` Zypper install: `zypper install package1 package2 package3` remove: `zypper rm package1 package2` Googet install: `googet -noconfirm install package1 package2 package3` remove: `googet -noconfirm remove package1 package2 package3`',
    required: [],
  })
  .openapi('Package')

const EffectiveGuestPolicySourcedPackageSchema = z
  .object({
    package: PackageSchema.exactOptional().openapi({
      description: 'A software package to configure on the VM instance.',
    }),
    source: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the guest policy providing this config.' }),
  })
  .openapi({ description: 'A guest policy package including its source.', required: [] })
  .openapi('EffectiveGuestPolicySourcedPackage')

const SoftwareRecipeArtifactGcsSchema = z
  .object({
    bucket: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Bucket of the Google Cloud Storage object. Given an example URL: `https://storage.googleapis.com/my-bucket/foo/bar#1234567` this value would be `my-bucket`.',
      }),
    generation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Must be provided if allow_insecure is false. Generation number of the Google Cloud Storage object. `https://storage.googleapis.com/my-bucket/foo/bar#1234567` this value would be `1234567`.',
      }),
    object: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the Google Cloud Storage object. As specified [here] (https://cloud.google.com/storage/docs/naming#objectnames) Given an example URL: `https://storage.googleapis.com/my-bucket/foo/bar#1234567` this value would be `foo/bar`.',
      }),
  })
  .openapi({
    description: 'Specifies an artifact available as a Google Cloud Storage object.',
    required: [],
  })
  .openapi('SoftwareRecipeArtifactGcs')

const SoftwareRecipeArtifactRemoteSchema = z
  .object({
    checksum: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Must be provided if `allow_insecure` is `false`. SHA256 checksum in hex format, to compare to the checksum of the artifact. If the checksum is not empty and it doesn't match the artifact then the recipe installation fails before running any of the steps.",
      }),
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URI from which to fetch the object. It should contain both the protocol and path following the format {protocol}://{location}.',
      }),
  })
  .openapi({ description: 'Specifies an artifact available via some URI.', required: [] })
  .openapi('SoftwareRecipeArtifactRemote')

const SoftwareRecipeArtifactSchema = z
  .object({
    allowInsecure: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Defaults to false. When false, recipes are subject to validations based on the artifact type: Remote: A checksum must be specified, and only protocols with transport-layer security are permitted. GCS: An object generation number must be specified.',
      }),
    gcs: SoftwareRecipeArtifactGcsSchema.exactOptional().openapi({
      description: 'A Google Cloud Storage artifact.',
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Id of the artifact, which the installation and update steps of this recipe can reference. Artifacts in a recipe cannot have the same id.',
      }),
    remote: SoftwareRecipeArtifactRemoteSchema.exactOptional().openapi({
      description: 'A generic remote artifact.',
    }),
  })
  .openapi({ description: 'Specifies a resource to be used in the recipe.', required: [] })
  .openapi('SoftwareRecipeArtifact')

const SoftwareRecipeStepExtractArchiveSchema = z
  .object({
    artifactId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The id of the relevant artifact in the recipe.' }),
    destination: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Directory to extract archive to. Defaults to `/` on Linux or `C:\\` on Windows.',
      }),
    type: z
      .enum([
        'ARCHIVE_TYPE_UNSPECIFIED',
        'TAR',
        'TAR_GZIP',
        'TAR_BZIP',
        'TAR_LZMA',
        'TAR_XZ',
        'ZIP',
      ])
      .exactOptional()
      .openapi({ description: 'Required. The type of the archive to extract.' }),
  })
  .openapi({
    description: 'Extracts an archive of the type specified in the specified directory.',
    required: [],
  })
  .openapi('SoftwareRecipeStepExtractArchive')

const SoftwareRecipeStepInstallDpkgSchema = z
  .object({
    artifactId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The id of the relevant artifact in the recipe.' }),
  })
  .openapi({ description: 'Installs a deb via dpkg.', required: [] })
  .openapi('SoftwareRecipeStepInstallDpkg')

const SoftwareRecipeStepCopyFileSchema = z
  .object({
    artifactId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The id of the relevant artifact in the recipe.' }),
    destination: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The absolute path on the instance to put the file.' }),
    overwrite: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to allow this step to overwrite existing files. If this is false and the file already exists the file is not overwritten and the step is considered a success. Defaults to false.',
      }),
    permissions: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Consists of three octal digits which represent, in order, the permissions of the owner, group, and other users for the file (similarly to the numeric mode used in the linux chmod utility). Each digit represents a three bit number with the 4 bit corresponding to the read permissions, the 2 bit corresponds to the write bit, and the one bit corresponds to the execute permission. Default behavior is 755. Below are some examples of permissions and their associated values: read, write, and execute: 7 read and execute: 5 read and write: 6 read only: 4',
      }),
  })
  .openapi({
    description: 'Copies the artifact to the specified path on the instance.',
    required: [],
  })
  .openapi('SoftwareRecipeStepCopyFile')

const SoftwareRecipeStepExecFileSchema = z
  .object({
    allowedExitCodes: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'Defaults to [0]. A list of possible return values that the program can return to indicate a success.',
      }),
    args: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Arguments to be passed to the provided executable.' }),
    artifactId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the relevant artifact in the recipe.' }),
    localPath: z
      .string()
      .exactOptional()
      .openapi({ description: 'The absolute path of the file on the local filesystem.' }),
  })
  .openapi({ description: 'Executes an artifact or local file.', required: [] })
  .openapi('SoftwareRecipeStepExecFile')

const SoftwareRecipeStepInstallMsiSchema = z
  .object({
    allowedExitCodes: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0]',
      }),
    artifactId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The id of the relevant artifact in the recipe.' }),
    flags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The flags to use when installing the MSI defaults to ["/i"] (i.e. the install flag).',
      }),
  })
  .openapi({ description: 'Installs an MSI file.', required: [] })
  .openapi('SoftwareRecipeStepInstallMsi')

const SoftwareRecipeStepInstallRpmSchema = z
  .object({
    artifactId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The id of the relevant artifact in the recipe.' }),
  })
  .openapi({ description: 'Installs an rpm file via the rpm utility.', required: [] })
  .openapi('SoftwareRecipeStepInstallRpm')

const SoftwareRecipeStepRunScriptSchema = z
  .object({
    allowedExitCodes: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0]',
      }),
    interpreter: z
      .enum(['INTERPRETER_UNSPECIFIED', 'SHELL', 'POWERSHELL'])
      .exactOptional()
      .openapi({
        description:
          'The script interpreter to use to run the script. If no interpreter is specified the script is executed directly, which likely only succeed for scripts with [shebang lines](https://en.wikipedia.org/wiki/Shebang_\\(Unix\\)).',
      }),
    script: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The shell script to be executed.' }),
  })
  .openapi({ description: 'Runs a script through an interpreter.', required: [] })
  .openapi('SoftwareRecipeStepRunScript')

const SoftwareRecipeStepSchema = z
  .object({
    archiveExtraction: SoftwareRecipeStepExtractArchiveSchema.exactOptional().openapi({
      description: 'Extracts an archive into the specified directory.',
    }),
    dpkgInstallation: SoftwareRecipeStepInstallDpkgSchema.exactOptional().openapi({
      description: 'Installs a deb file via dpkg.',
    }),
    fileCopy: SoftwareRecipeStepCopyFileSchema.exactOptional().openapi({
      description: 'Copies a file onto the instance.',
    }),
    fileExec: SoftwareRecipeStepExecFileSchema.exactOptional().openapi({
      description: 'Executes an artifact or local file.',
    }),
    msiInstallation: SoftwareRecipeStepInstallMsiSchema.exactOptional().openapi({
      description: 'Installs an MSI file.',
    }),
    rpmInstallation: SoftwareRecipeStepInstallRpmSchema.exactOptional().openapi({
      description: 'Installs an rpm file via the rpm utility.',
    }),
    scriptRun: SoftwareRecipeStepRunScriptSchema.exactOptional().openapi({
      description: 'Runs commands in a shell.',
    }),
  })
  .openapi({
    description: 'An action that can be taken as part of installing or updating a recipe.',
    required: [],
  })
  .openapi('SoftwareRecipeStep')

const SoftwareRecipeSchema = z
  .object({
    artifacts: z
      .array(SoftwareRecipeArtifactSchema)
      .exactOptional()
      .openapi({ description: 'Resources available to be used in the steps in the recipe.' }),
    desiredState: z
      .enum(['DESIRED_STATE_UNSPECIFIED', 'INSTALLED', 'UPDATED', 'REMOVED'])
      .exactOptional()
      .openapi({
        description:
          "Default is INSTALLED. The desired state the agent should maintain for this recipe. INSTALLED: The software recipe is installed on the instance but won't be updated to new versions. UPDATED: The software recipe is installed on the instance. The recipe is updated to a higher version, if a higher version of the recipe is assigned to this instance. REMOVE: Remove is unsupported for software recipes and attempts to create or update a recipe to the REMOVE state is rejected.",
      }),
    installSteps: z
      .array(SoftwareRecipeStepSchema)
      .exactOptional()
      .openapi({
        description:
          'Actions to be taken for installing this recipe. On failure it stops executing steps and does not attempt another installation. Any steps taken (including partially completed steps) are not rolled back.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Unique identifier for the recipe. Only one recipe with a given name is installed on an instance. Names are also used to identify resources which helps to determine whether guest policies have conflicts. This means that requests to create multiple recipes with the same name and version are rejected since they could potentially have conflicting assignments.',
      }),
    updateSteps: z
      .array(SoftwareRecipeStepSchema)
      .exactOptional()
      .openapi({
        description:
          'Actions to be taken for updating this recipe. On failure it stops executing steps and does not attempt another update for this recipe. Any steps taken (including partially completed steps) are not rolled back.',
      }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The version of this software recipe. Version can be up to 4 period separated numbers (e.g. 12.34.56.78).',
      }),
  })
  .openapi({
    description:
      'A software recipe is a set of instructions for installing and configuring a piece of software. It consists of a set of artifacts that are downloaded, and a set of steps that install, configure, and/or update the software. Recipes support installing and updating software from artifacts in the following formats: Zip archive, Tar archive, Windows MSI, Debian package, and RPM package. Additionally, recipes support executing a script (either defined in a file or directly in this api) in bash, sh, cmd, and powershell. Updating a software recipe If a recipe is assigned to an instance and there is a recipe with the same name but a lower version already installed and the assigned state of the recipe is `UPDATED`, then the recipe is updated to the new version. Script Working Directories Each script or execution step is run in its own temporary directory which is deleted after completing the step.',
    required: [],
  })
  .openapi('SoftwareRecipe')

const EffectiveGuestPolicySourcedSoftwareRecipeSchema = z
  .object({
    softwareRecipe: SoftwareRecipeSchema.exactOptional().openapi({
      description: 'A software recipe to configure on the VM instance.',
    }),
    source: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the guest policy providing this config.' }),
  })
  .openapi({ description: 'A guest policy recipe including its source.', required: [] })
  .openapi('EffectiveGuestPolicySourcedSoftwareRecipe')

const EffectiveGuestPolicySchema = z
  .object({
    packageRepositories: z
      .array(EffectiveGuestPolicySourcedPackageRepositorySchema)
      .exactOptional()
      .openapi({
        description: 'List of package repository configurations assigned to the VM instance.',
      }),
    packages: z
      .array(EffectiveGuestPolicySourcedPackageSchema)
      .exactOptional()
      .openapi({ description: 'List of package configurations assigned to the VM instance.' }),
    softwareRecipes: z
      .array(EffectiveGuestPolicySourcedSoftwareRecipeSchema)
      .exactOptional()
      .openapi({ description: 'List of recipes assigned to the VM instance.' }),
  })
  .openapi({
    description: 'The effective guest policy that applies to a VM instance.',
    required: [],
  })
  .openapi('EffectiveGuestPolicy')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const GcsObjectSchema = z
  .object({
    bucket: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Bucket of the Google Cloud Storage object.' }),
    generationNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Generation number of the Google Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change.',
      }),
    object: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Name of the Google Cloud Storage object.' }),
  })
  .openapi({ description: 'Google Cloud Storage object representation.', required: [] })
  .openapi('GcsObject')

const ExecStepConfigSchema = z
  .object({
    allowedSuccessCodes: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'Defaults to [0]. A list of possible return values that the execution can return to indicate a success.',
      }),
    gcsObject: GcsObjectSchema.exactOptional().openapi({
      description: 'A Google Cloud Storage object containing the executable.',
    }),
    interpreter: z
      .enum(['INTERPRETER_UNSPECIFIED', 'NONE', 'SHELL', 'POWERSHELL'])
      .exactOptional()
      .openapi({
        description:
          'The script interpreter to use to run the script. If no interpreter is specified the script will be executed directly, which will likely only succeed for scripts with [shebang lines] (https://en.wikipedia.org/wiki/Shebang_\\(Unix\\)).',
      }),
    localPath: z
      .string()
      .exactOptional()
      .openapi({ description: 'An absolute path to the executable on the VM.' }),
  })
  .openapi({ description: 'Common configurations for an ExecStep.', required: [] })
  .openapi('ExecStepConfig')

const ExecStepSchema = z
  .object({
    linuxExecStepConfig: ExecStepConfigSchema.exactOptional().openapi({
      description: 'The ExecStepConfig for all Linux VMs targeted by the PatchJob.',
    }),
    windowsExecStepConfig: ExecStepConfigSchema.exactOptional().openapi({
      description: 'The ExecStepConfig for all Windows VMs targeted by the PatchJob.',
    }),
  })
  .openapi({ description: 'A step that runs an executable for a PatchJob.', required: [] })
  .openapi('ExecStep')

const PatchInstanceFilterGroupLabelSchema = z
  .object({
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Compute Engine instance labels that must be present for a VM instance to be targeted by this filter.',
      }),
  })
  .openapi({
    description:
      'Represents a group of VMs that can be identified as having all these labels, for example "env=prod and app=web".',
    required: [],
  })
  .openapi('PatchInstanceFilterGroupLabel')

const PatchInstanceFilterSchema = z
  .object({
    all: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Target all VM instances in the project. If true, no other criteria is permitted.',
      }),
    groupLabels: z
      .array(PatchInstanceFilterGroupLabelSchema)
      .exactOptional()
      .openapi({
        description:
          'Targets VM instances matching at least one of these label sets. This allows targeting of disparate groups, for example "env=prod or env=staging".',
      }),
    instanceNamePrefixes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Targets VMs whose name starts with one of these prefixes. Similar to labels, this is another way to group VMs when targeting configs, for example prefix="prod-".',
      }),
    instances: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Targets any of the VM instances specified. Instances are specified by their URI in the form `zones/[ZONE]/instances/[INSTANCE_NAME]`, `projects/[PROJECT_ID]/zones/[ZONE]/instances/[INSTANCE_NAME]`, or `https://www.googleapis.com/compute/v1/projects/[PROJECT_ID]/zones/[ZONE]/instances/[INSTANCE_NAME]`',
      }),
    zones: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Targets VM instances in ANY of these zones. Leave empty to target VM instances in any zone.',
      }),
  })
  .openapi({
    description:
      'A filter to target VM instances for patching. The targeted VMs must meet all criteria specified. So if both labels and zones are specified, the patch job targets only VMs with those labels and in those zones.',
    required: [],
  })
  .openapi('PatchInstanceFilter')

const GooSettingsSchema = z
  .object({})
  .openapi({ description: 'Googet patching is performed by running `googet update`.' })
  .openapi('GooSettings')

const WindowsUpdateSettingsSchema = z
  .object({
    classifications: z
      .array(
        z.enum([
          'CLASSIFICATION_UNSPECIFIED',
          'CRITICAL',
          'SECURITY',
          'DEFINITION',
          'DRIVER',
          'FEATURE_PACK',
          'SERVICE_PACK',
          'TOOL',
          'UPDATE_ROLLUP',
          'UPDATE',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'Only apply updates of these windows update classifications. If empty, all updates are applied.',
      }),
    excludes: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of KBs to exclude from update.' }),
    exclusivePatches: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'An exclusive list of kbs to be updated. These are the only patches that will be updated. This field must not be used with other patch configurations.',
      }),
  })
  .openapi({
    description: 'Windows patching is performed using the Windows Update Agent.',
    required: [],
  })
  .openapi('WindowsUpdateSettings')

const YumSettingsSchema = z
  .object({
    excludes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of packages to exclude from update. These packages are excluded by using the yum `--exclude` flag.',
      }),
    exclusivePackages: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'An exclusive list of packages to be updated. These are the only packages that will be updated. If these packages are not installed, they will be ignored. This field must not be specified with any other patch configuration fields.',
      }),
    minimal: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Will cause patch to run `yum update-minimal` instead.' }),
    security: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Adds the `--security` flag to `yum update`. Not supported on all platforms.',
      }),
  })
  .openapi({
    description:
      'Yum patching is performed by executing `yum update`. Additional options can be set to control how this is executed. Note that not all settings are supported on all platforms.',
    required: [],
  })
  .openapi('YumSettings')

const ZypperSettingsSchema = z
  .object({
    categories: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Install only patches with these categories. Common categories include security, recommended, and feature.',
      }),
    excludes: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of patches to exclude from update.' }),
    exclusivePatches: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "An exclusive list of patches to be updated. These are the only patches that will be installed using 'zypper patch patch:' command. This field must not be used with any other patch configuration fields.",
      }),
    severities: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Install only patches with these severities. Common severities include critical, important, moderate, and low.',
      }),
    withOptional: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Adds the `--with-optional` flag to `zypper patch`.' }),
    withUpdate: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Adds the `--with-update` flag, to `zypper patch`.' }),
  })
  .openapi({
    description:
      'Zypper patching is performed by running `zypper patch`. See also https://en.opensuse.org/SDB:Zypper_manual.',
    required: [],
  })
  .openapi('ZypperSettings')

const PatchConfigSchema = z
  .object({
    apt: AptSettingsSchema.exactOptional().openapi({
      description:
        'Apt update settings. Use this setting to override the default `apt` patch rules.',
    }),
    goo: GooSettingsSchema.exactOptional().openapi({
      description:
        'Goo update settings. Use this setting to override the default `goo` patch rules.',
    }),
    migInstancesAllowed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Allows the patch job to run on Managed instance groups (MIGs).' }),
    postStep: ExecStepSchema.exactOptional().openapi({
      description: 'The `ExecStep` to run after the patch update.',
    }),
    preStep: ExecStepSchema.exactOptional().openapi({
      description: 'The `ExecStep` to run before the patch update.',
    }),
    rebootConfig: z
      .enum(['REBOOT_CONFIG_UNSPECIFIED', 'DEFAULT', 'ALWAYS', 'NEVER'])
      .exactOptional()
      .openapi({ description: 'Post-patch reboot settings.' }),
    windowsUpdate: WindowsUpdateSettingsSchema.exactOptional().openapi({
      description: 'Windows update settings. Use this override the default windows patch rules.',
    }),
    yum: YumSettingsSchema.exactOptional().openapi({
      description:
        'Yum update settings. Use this setting to override the default `yum` patch rules.',
    }),
    zypper: ZypperSettingsSchema.exactOptional().openapi({
      description:
        'Zypper update settings. Use this setting to override the default `zypper` patch rules.',
    }),
  })
  .openapi({
    description:
      'Patch configuration specifications. Contains details on how to apply the patch(es) to a VM instance.',
    required: [],
  })
  .openapi('PatchConfig')

const FixedOrPercentSchema = z
  .object({
    fixed: z.int32().exactOptional().openapi({ description: 'Specifies a fixed value.' }),
    percent: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Specifies the relative value defined as a percentage, which will be multiplied by a reference value.',
      }),
  })
  .openapi({
    description:
      'Message encapsulating a value that can be either absolute ("fixed") or relative ("percent") to a value.',
    required: [],
  })
  .openapi('FixedOrPercent')

const PatchRolloutSchema = z
  .object({
    disruptionBudget: FixedOrPercentSchema.exactOptional().openapi({
      description:
        'The maximum number (or percentage) of VMs per zone to disrupt at any given moment. The number of VMs calculated from multiplying the percentage by the total number of VMs in a zone is rounded up. During patching, a VM is considered disrupted from the time the agent is notified to begin until patching has completed. This disruption time includes the time to complete reboot and any post-patch steps. A VM contributes to the disruption budget if its patching operation fails either when applying the patches, running pre or post patch steps, or if it fails to respond with a success notification before timing out. VMs that are not running or do not have an active agent do not count toward this disruption budget. For zone-by-zone rollouts, if the disruption budget in a zone is exceeded, the patch job stops, because continuing to the next zone requires completion of the patch process in the previous zone. For example, if the disruption budget has a fixed value of `10`, and 8 VMs fail to patch in the current zone, the patch job continues to patch 2 VMs at a time until the zone is completed. When that zone is completed successfully, patching begins with 10 VMs at a time in the next zone. If 10 VMs in the next zone fail to patch, the patch job stops.',
    }),
    mode: z
      .enum(['MODE_UNSPECIFIED', 'ZONE_BY_ZONE', 'CONCURRENT_ZONES'])
      .exactOptional()
      .openapi({ description: 'Mode of the patch rollout.' }),
  })
  .openapi({
    description:
      'Patch rollout configuration specifications. Contains details on the concurrency control when applying patch(es) to all targeted VMs.',
    required: [],
  })
  .openapi('PatchRollout')

const ExecutePatchJobRequestSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Description of the patch job. Length of the description is limited to 1024 characters.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Display name for this patch job. This does not have to be unique.',
      }),
    dryRun: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If this patch is a dry-run only, instances are contacted but will do nothing.',
      }),
    duration: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Duration of the patch job. After the duration ends, the patch job times out.',
      }),
    instanceFilter: PatchInstanceFilterSchema.exactOptional().openapi({
      description:
        'Required. Instances to patch, either explicitly or filtered by some criteria such as zone or labels.',
    }),
    patchConfig: PatchConfigSchema.exactOptional().openapi({
      description:
        'Patch configuration being applied. If omitted, instances are patched using the default configurations.',
    }),
    rollout: PatchRolloutSchema.exactOptional().openapi({
      description: 'Rollout strategy of the patch job.',
    }),
  })
  .openapi({
    description: 'A request message to initiate patching across Compute Engine instances.',
    required: [],
  })
  .openapi('ExecutePatchJobRequest')

const GoogleCloudOsconfigV1OSPolicyAssignmentOperationMetadataSchema = z
  .object({
    apiMethod: z
      .enum(['API_METHOD_UNSPECIFIED', 'CREATE', 'UPDATE', 'DELETE'])
      .exactOptional()
      .openapi({ description: 'The OS policy assignment API method.' }),
    osPolicyAssignment: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Reference to the `OSPolicyAssignment` API resource. Format: `projects/{project_number}/locations/{location}/osPolicyAssignments/{os_policy_assignment_id@revision_id}`',
      }),
    rolloutStartTime: z.string().exactOptional().openapi({ description: 'Rollout start time' }),
    rolloutState: z
      .enum(['ROLLOUT_STATE_UNSPECIFIED', 'IN_PROGRESS', 'CANCELLING', 'CANCELLED', 'SUCCEEDED'])
      .exactOptional()
      .openapi({ description: 'State of the rollout' }),
    rolloutUpdateTime: z.string().exactOptional().openapi({ description: 'Rollout update time' }),
  })
  .openapi({
    description:
      'OS policy assignment operation metadata provided by OS policy assignment API methods that return long running operations.',
    required: [],
  })
  .openapi('GoogleCloudOsconfigV1OSPolicyAssignmentOperationMetadata')

const GuestPolicySchema = z
  .object({
    assignment: AssignmentSchema.exactOptional().openapi({
      description:
        'Required. Specifies the VM instances that are assigned to this policy. This allows you to target sets or groups of VM instances by different parameters such as labels, names, OS, or zones. If left empty, all VM instances underneath this policy are targeted. At the same level in the resource hierarchy (that is within a project), the service prevents the creation of multiple policies that conflict with each other. For more information, see how the service [handles assignment conflicts](/compute/docs/os-config-management/create-guest-policy#handle-conflicts).',
    }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Time this guest policy was created.', readOnly: true }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Description of the guest policy. Length of the description is limited to 1024 characters.',
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The etag for this guest policy. If this is provided on update, it must match the server's etag.",
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Unique name of the resource in this project using one of the following forms: `projects/{project_number}/guestPolicies/{guest_policy_id}`.',
      }),
    packageRepositories: z
      .array(PackageRepositorySchema)
      .exactOptional()
      .openapi({
        description:
          'A list of package repositories to configure on the VM instance. This is done before any other configs are applied so they can use these repos. Package repositories are only configured if the corresponding package manager(s) are available.',
      }),
    packages: z
      .array(PackageSchema)
      .exactOptional()
      .openapi({ description: 'The software packages to be managed by this policy.' }),
    recipes: z
      .array(SoftwareRecipeSchema)
      .exactOptional()
      .openapi({ description: 'A list of Recipes to install on the VM instance.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Last time this guest policy was updated.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'An OS Config resource representing a guest configuration policy. These policies represent the desired state for VM instance guest environments including packages to install or remove, package repository configurations, and software to install.',
    required: [],
  })
  .openapi('GuestPolicy')

const ListGuestPoliciesResponseSchema = z
  .object({
    guestPolicies: z
      .array(GuestPolicySchema)
      .exactOptional()
      .openapi({ description: 'The list of GuestPolicies.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A pagination token that can be used to get the next page of guest policies.',
      }),
  })
  .openapi({ description: 'A response message for listing guest policies.', required: [] })
  .openapi('ListGuestPoliciesResponse')

const OneTimeScheduleSchema = z
  .object({
    executeTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The desired patch job execution time.' }),
  })
  .openapi({
    description:
      'Sets the time for a one time patch deployment. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.',
    required: [],
  })
  .openapi('OneTimeSchedule')

const WeekDayOfMonthSchema = z
  .object({
    dayOfWeek: z
      .enum([
        'DAY_OF_WEEK_UNSPECIFIED',
        'MONDAY',
        'TUESDAY',
        'WEDNESDAY',
        'THURSDAY',
        'FRIDAY',
        'SATURDAY',
        'SUNDAY',
      ])
      .exactOptional()
      .openapi({ description: 'Required. A day of the week.' }),
    dayOffset: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Represents the number of days before or after the given week day of month that the patch deployment is scheduled for. For example if `week_ordinal` and `day_of_week` values point to the second day of the month and this `day_offset` value is set to `3`, the patch deployment takes place three days after the second Tuesday of the month. If this value is negative, for example -5, the patches are deployed five days before before the second Tuesday of the month. Allowed values are in range [-30, 30].',
      }),
    weekOrdinal: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Required. Week number in a month. 1-4 indicates the 1st to 4th week of the month. -1 indicates the last week of the month.',
      }),
  })
  .openapi({
    description: 'Represents one week day in a month. An example is "the 4th Sunday".',
    required: [],
  })
  .openapi('WeekDayOfMonth')

const MonthlyScheduleSchema = z
  .object({
    monthDay: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Required. One day of the month. 1-31 indicates the 1st to the 31st day. -1 indicates the last day of the month. Months without the target day will be skipped. For example, a schedule to run "every month on the 31st" will not run in February, April, June, etc.',
      }),
    weekDayOfMonth: WeekDayOfMonthSchema.exactOptional().openapi({
      description: 'Required. Week day in a month.',
    }),
  })
  .openapi({
    description:
      'Represents a monthly schedule. An example of a valid monthly schedule is "on the third Tuesday of the month" or "on the 15th of the month".',
    required: [],
  })
  .openapi('MonthlySchedule')

const TimeOfDaySchema = z
  .object({
    hours: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.',
      }),
    minutes: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Minutes of hour of day. Must be from 0 to 59.' }),
    nanos: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.',
      }),
    seconds: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.',
      }),
  })
  .openapi({
    description:
      'Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.',
    required: [],
  })
  .openapi('TimeOfDay')

const TimeZoneSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'IANA Time Zone Database time zone, e.g. "America/New_York".' }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. IANA Time Zone Database version number, e.g. "2019a".' }),
  })
  .openapi({
    description:
      'Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).',
    required: [],
  })
  .openapi('TimeZone')

const WeeklyScheduleSchema = z
  .object({
    dayOfWeek: z
      .enum([
        'DAY_OF_WEEK_UNSPECIFIED',
        'MONDAY',
        'TUESDAY',
        'WEDNESDAY',
        'THURSDAY',
        'FRIDAY',
        'SATURDAY',
        'SUNDAY',
      ])
      .exactOptional()
      .openapi({ description: 'Required. Day of the week.' }),
  })
  .openapi({ description: 'Represents a weekly schedule.', required: [] })
  .openapi('WeeklySchedule')

const RecurringScheduleSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The end time at which a recurring patch deployment schedule is no longer active.',
      }),
    frequency: z
      .enum(['FREQUENCY_UNSPECIFIED', 'WEEKLY', 'MONTHLY', 'DAILY'])
      .exactOptional()
      .openapi({ description: 'Required. The frequency unit of this recurring schedule.' }),
    lastExecuteTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time the last patch job ran successfully.',
        readOnly: true,
      }),
    monthly: MonthlyScheduleSchema.exactOptional().openapi({
      description: 'Required. Schedule with monthly executions.',
    }),
    nextExecuteTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time the next patch job is scheduled to run.',
        readOnly: true,
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The time that the recurring schedule becomes effective. Defaults to `create_time` of the patch deployment.',
      }),
    timeOfDay: TimeOfDaySchema.exactOptional().openapi({
      description: 'Required. Time of the day to run a recurring deployment.',
    }),
    timeZone: TimeZoneSchema.exactOptional().openapi({
      description:
        'Required. Defines the time zone that `time_of_day` is relative to. The rules for daylight saving time are determined by the chosen time zone.',
    }),
    weekly: WeeklyScheduleSchema.exactOptional().openapi({
      description: 'Required. Schedule with weekly executions.',
    }),
  })
  .openapi({ description: 'Sets the time for recurring patch deployments.', required: [] })
  .openapi('RecurringSchedule')

const PatchDeploymentSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Time the patch deployment was created. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.',
        readOnly: true,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Description of the patch deployment. Length of the description is limited to 1024 characters.',
      }),
    duration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Duration of the patch. After the duration ends, the patch times out.',
      }),
    instanceFilter: PatchInstanceFilterSchema.exactOptional().openapi({
      description: 'Required. VM instances to patch.',
    }),
    lastExecuteTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The last time a patch job was started by this deployment. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique name for the patch deployment resource in a project. The patch deployment name is in the form: `projects/{project_id}/patchDeployments/{patch_deployment_id}`. This field is ignored when you create a new patch deployment.',
      }),
    oneTimeSchedule: OneTimeScheduleSchema.exactOptional().openapi({
      description: 'Required. Schedule a one-time execution.',
    }),
    patchConfig: PatchConfigSchema.exactOptional().openapi({
      description: 'Optional. Patch configuration that is applied.',
    }),
    recurringSchedule: RecurringScheduleSchema.exactOptional().openapi({
      description: 'Required. Schedule recurring executions.',
    }),
    rollout: PatchRolloutSchema.exactOptional().openapi({
      description: 'Optional. Rollout strategy of the patch job.',
    }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'ACTIVE', 'PAUSED'])
      .exactOptional()
      .openapi({
        description: 'Output only. Current state of the patch deployment.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Time the patch deployment was last updated. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Patch deployments are configurations that individual patch jobs use to complete a patch. These configurations include instance filter, package repository settings, and a schedule. For more information about creating and managing patch deployments, see [Scheduling patch jobs](https://cloud.google.com/compute/docs/os-patch-management/schedule-patch-jobs).',
    required: [],
  })
  .openapi('PatchDeployment')

const ListPatchDeploymentsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A pagination token that can be used to get the next page of patch deployments.',
      }),
    patchDeployments: z
      .array(PatchDeploymentSchema)
      .exactOptional()
      .openapi({ description: 'The list of patch deployments.' }),
  })
  .openapi({ description: 'A response message for listing patch deployments.', required: [] })
  .openapi('ListPatchDeploymentsResponse')

const PatchJobInstanceDetailsSchema = z
  .object({
    attemptCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The number of times the agent that the agent attempts to apply the patch.',
      }),
    failureReason: z
      .string()
      .exactOptional()
      .openapi({ description: 'If the patch fails, this field provides the reason.' }),
    instanceSystemId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier for the instance. This identifier is defined by the server.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The instance name in the form `projects/*/zones/*/instances/*`' }),
    state: z
      .enum([
        'PATCH_STATE_UNSPECIFIED',
        'PENDING',
        'INACTIVE',
        'NOTIFIED',
        'STARTED',
        'DOWNLOADING_PATCHES',
        'APPLYING_PATCHES',
        'REBOOTING',
        'SUCCEEDED',
        'SUCCEEDED_REBOOT_REQUIRED',
        'FAILED',
        'ACKED',
        'TIMED_OUT',
        'RUNNING_PRE_PATCH_STEP',
        'RUNNING_POST_PATCH_STEP',
        'NO_AGENT_DETECTED',
      ])
      .exactOptional()
      .openapi({ description: 'Current state of instance patch.' }),
  })
  .openapi({
    description:
      'Patch details for a VM instance. For more information about reviewing VM instance details, see [Listing all VM instance details for a specific patch job](https://cloud.google.com/compute/docs/os-patch-management/manage-patch-jobs#list-instance-details).',
    required: [],
  })
  .openapi('PatchJobInstanceDetails')

const ListPatchJobInstanceDetailsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A pagination token that can be used to get the next page of results.',
      }),
    patchJobInstanceDetails: z
      .array(PatchJobInstanceDetailsSchema)
      .exactOptional()
      .openapi({ description: 'A list of instance status.' }),
  })
  .openapi({
    description: 'A response message for listing the instances details for a patch job.',
    required: [],
  })
  .openapi('ListPatchJobInstanceDetailsResponse')

const PatchJobInstanceDetailsSummarySchema = z
  .object({
    ackedInstanceCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of instances that have acked and will start shortly.' }),
    applyingPatchesInstanceCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of instances that are applying patches.' }),
    downloadingPatchesInstanceCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of instances that are downloading patches.' }),
    failedInstanceCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of instances that failed.' }),
    inactiveInstanceCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of instances that are inactive.' }),
    noAgentDetectedInstanceCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Number of instances that do not appear to be running the agent. Check to ensure that the agent is installed, running, and able to communicate with the service.',
      }),
    notifiedInstanceCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of instances notified about patch job.' }),
    pendingInstanceCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of instances pending patch job.' }),
    postPatchStepInstanceCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of instances that are running the post-patch step.' }),
    prePatchStepInstanceCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of instances that are running the pre-patch step.' }),
    rebootingInstanceCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of instances rebooting.' }),
    startedInstanceCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of instances that have started.' }),
    succeededInstanceCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of instances that have completed successfully.' }),
    succeededRebootRequiredInstanceCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of instances that require reboot.' }),
    timedOutInstanceCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Number of instances that exceeded the time out while applying the patch.',
      }),
  })
  .openapi({
    description:
      'A summary of the current patch state across all instances that this patch job affects. Contains counts of instances in different states. These states map to `InstancePatchState`. List patch job instance details to see the specific states of each instance.',
    required: [],
  })
  .openapi('PatchJobInstanceDetailsSummary')

const PatchJobSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time this patch job was created.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Description of the patch job. Length of the description is limited to 1024 characters.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Display name for this patch job. This is not a unique identifier.',
      }),
    dryRun: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If this patch job is a dry run, the agent reports that it has finished without running any updates on the VM instance.',
      }),
    duration: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Duration of the patch job. After the duration ends, the patch job times out.',
      }),
    errorMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If this patch job failed, this message provides information about the failure.',
      }),
    instanceDetailsSummary: PatchJobInstanceDetailsSummarySchema.exactOptional().openapi({
      description: 'Summary of instance details.',
    }),
    instanceFilter: PatchInstanceFilterSchema.exactOptional().openapi({
      description: 'Instances to patch.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique identifier for this patch job in the form `projects/*/patchJobs/*`',
      }),
    patchConfig: PatchConfigSchema.exactOptional().openapi({
      description: 'Patch configuration being applied.',
    }),
    patchDeployment: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Name of the patch deployment that created this patch job.',
        readOnly: true,
      }),
    percentComplete: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Reflects the overall progress of the patch job in the range of 0.0 being no progress to 100.0 being complete.',
      }),
    rollout: PatchRolloutSchema.exactOptional().openapi({
      description: 'Rollout strategy being applied.',
    }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'STARTED',
        'INSTANCE_LOOKUP',
        'PATCHING',
        'SUCCEEDED',
        'COMPLETED_WITH_ERRORS',
        'CANCELED',
        'TIMED_OUT',
      ])
      .exactOptional()
      .openapi({ description: 'The current state of the PatchJob.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Last time this patch job was updated.' }),
  })
  .openapi({
    description:
      'A high level representation of a patch job that is either in progress or has completed. Instance details are not included in the job. To paginate through instance details, use `ListPatchJobInstanceDetails`. For more information about patch jobs, see [Creating patch jobs](https://cloud.google.com/compute/docs/os-patch-management/create-patch-job).',
    required: [],
  })
  .openapi('PatchJob')

const ListPatchJobsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A pagination token that can be used to get the next page of results.',
      }),
    patchJobs: z
      .array(PatchJobSchema)
      .exactOptional()
      .openapi({ description: 'The list of patch jobs.' }),
  })
  .openapi({ description: 'A response message for listing patch jobs.', required: [] })
  .openapi('ListPatchJobsResponse')

const LookupEffectiveGuestPolicyRequestSchema = z
  .object({
    osArchitecture: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Architecture of OS running on the instance. The OS Config agent only provides this field for targeting if OS Inventory is enabled for that instance.',
      }),
    osShortName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Short name of the OS running on the instance. The OS Config agent only provides this field for targeting if OS Inventory is enabled for that instance.',
      }),
    osVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Version of the OS running on the instance. The OS Config agent only provides this field for targeting if OS Inventory is enabled for that VM instance.',
      }),
  })
  .openapi({
    description:
      'A request message for getting the effective guest policy assigned to the instance.',
    required: [],
  })
  .openapi('LookupEffectiveGuestPolicyRequest')

const OSPolicyAssignmentOperationMetadataSchema = z
  .object({
    apiMethod: z
      .enum(['API_METHOD_UNSPECIFIED', 'CREATE', 'UPDATE', 'DELETE'])
      .exactOptional()
      .openapi({ description: 'The OS policy assignment API method.' }),
    osPolicyAssignment: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Reference to the `OSPolicyAssignment` API resource. Format: `projects/{project_number}/locations/{location}/osPolicyAssignments/{os_policy_assignment_id@revision_id}`',
      }),
    rolloutStartTime: z.string().exactOptional().openapi({ description: 'Rollout start time' }),
    rolloutState: z
      .enum(['ROLLOUT_STATE_UNSPECIFIED', 'IN_PROGRESS', 'CANCELLING', 'CANCELLED', 'SUCCEEDED'])
      .exactOptional()
      .openapi({ description: 'State of the rollout' }),
    rolloutUpdateTime: z.string().exactOptional().openapi({ description: 'Rollout update time' }),
  })
  .openapi({
    description:
      'OS policy assignment operation metadata provided by OS policy assignment API methods that return long running operations.',
    required: [],
  })
  .openapi('OSPolicyAssignmentOperationMetadata')

const PausePatchDeploymentRequestSchema = z
  .object({})
  .openapi({ description: 'A request message for pausing a patch deployment.' })
  .openapi('PausePatchDeploymentRequest')

const ResumePatchDeploymentRequestSchema = z
  .object({})
  .openapi({ description: 'A request message for resuming a patch deployment.' })
  .openapi('ResumePatchDeploymentRequest')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postV1betaInstanceLookupEffectiveGuestPolicyRoute = createRoute({
  method: 'post',
  path: '/v1beta/{instance}:lookupEffectiveGuestPolicy',
  tags: ['projects'],
  description:
    'Lookup the effective guest policy that applies to a VM instance. This lookup merges all policies that are assigned to the instance ancestry.',
  operationId: 'osconfig.projects.zones.instances.lookupEffectiveGuestPolicy',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Required. The VM instance whose policies are being looked up.',
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LookupEffectiveGuestPolicyRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EffectiveGuestPolicySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1betaNameRoute = createRoute({
  method: 'get',
  path: '/v1beta/{name}',
  tags: ['projects'],
  description:
    'Get the patch job. This can be used to track the progress of an ongoing patch job or review the details of completed jobs.',
  operationId: 'osconfig.projects.patchJobs.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. Name of the patch in the form `projects/*/patchJobs/*`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PatchJobSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1betaNameRoute = createRoute({
  method: 'delete',
  path: '/v1beta/{name}',
  tags: ['projects'],
  description: 'Delete an OS Config patch deployment.',
  operationId: 'osconfig.projects.patchDeployments.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the patch deployment in the form `projects/*/patchDeployments/*`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const patchV1betaNameRoute = createRoute({
  method: 'patch',
  path: '/v1beta/{name}',
  tags: ['projects'],
  description: 'Update an OS Config patch deployment.',
  operationId: 'osconfig.projects.patchDeployments.patch',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Field mask that controls which fields of the patch deployment should be updated.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Unique name for the patch deployment resource in a project. The patch deployment name is in the form: `projects/{project_id}/patchDeployments/{patch_deployment_id}`. This field is ignored when you create a new patch deployment.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchDeploymentSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PatchDeploymentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1betaNameCancelRoute = createRoute({
  method: 'post',
  path: '/v1beta/{name}:cancel',
  tags: ['projects'],
  description:
    'Cancel a patch job. The patch job must be active. Canceled patch jobs cannot be restarted.',
  operationId: 'osconfig.projects.patchJobs.cancel',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. Name of the patch in the form `projects/*/patchJobs/*`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CancelPatchJobRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PatchJobSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1betaNamePauseRoute = createRoute({
  method: 'post',
  path: '/v1beta/{name}:pause',
  tags: ['projects'],
  description:
    'Change state of patch deployment to "PAUSED". Patch deployment in paused state doesn\'t generate patch jobs.',
  operationId: 'osconfig.projects.patchDeployments.pause',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the patch deployment in the form `projects/*/patchDeployments/*`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PausePatchDeploymentRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PatchDeploymentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1betaNameResumeRoute = createRoute({
  method: 'post',
  path: '/v1beta/{name}:resume',
  tags: ['projects'],
  description:
    'Change state of patch deployment back to "ACTIVE". Patch deployment in active state continues to generate patch jobs.',
  operationId: 'osconfig.projects.patchDeployments.resume',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the patch deployment in the form `projects/*/patchDeployments/*`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ResumePatchDeploymentRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PatchDeploymentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1betaParentGuestPoliciesRoute = createRoute({
  method: 'get',
  path: '/v1beta/{parent}/guestPolicies',
  tags: ['projects'],
  description: 'Get a page of OS Config guest policies.',
  operationId: 'osconfig.projects.guestPolicies.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
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
            description: 'The maximum number of guest policies to return.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A pagination token returned from a previous call to `ListGuestPolicies` that indicates where this listing should continue from.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the parent using one of the following forms: `projects/{project_number}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListGuestPoliciesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1betaParentGuestPoliciesRoute = createRoute({
  method: 'post',
  path: '/v1beta/{parent}/guestPolicies',
  tags: ['projects'],
  description: 'Create an OS Config guest policy.',
  operationId: 'osconfig.projects.guestPolicies.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      guestPolicyId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The logical name of the guest policy in the project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the project.',
            in: 'query',
            name: 'guestPolicyId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the parent using one of the following forms: `projects/{project_number}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GuestPolicySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GuestPolicySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1betaParentInstanceDetailsRoute = createRoute({
  method: 'get',
  path: '/v1beta/{parent}/instanceDetails',
  tags: ['projects'],
  description: 'Get a list of instance details for a given patch job.',
  operationId: 'osconfig.projects.patchJobs.instanceDetails.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A filter expression that filters results listed in the response. This field supports filtering results by instance zone, name, state, or `failure_reason`.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
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
              'The maximum number of instance details records to return. Default is 100.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A pagination token returned from a previous call that indicates where this listing should continue from.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent for the instances are in the form of `projects/*/patchJobs/*`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListPatchJobInstanceDetailsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1betaParentPatchDeploymentsRoute = createRoute({
  method: 'get',
  path: '/v1beta/{parent}/patchDeployments',
  tags: ['projects'],
  description: 'Get a page of OS Config patch deployments.',
  operationId: 'osconfig.projects.patchDeployments.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
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
              'Optional. The maximum number of patch deployments to return. Default is 100.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A pagination token returned from a previous call to ListPatchDeployments that indicates where this listing should continue from.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The resource name of the parent in the form `projects/*`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListPatchDeploymentsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1betaParentPatchDeploymentsRoute = createRoute({
  method: 'post',
  path: '/v1beta/{parent}/patchDeployments',
  tags: ['projects'],
  description: 'Create an OS Config patch deployment.',
  operationId: 'osconfig.projects.patchDeployments.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      patchDeploymentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. A name for the patch deployment in the project. When creating a name the following rules apply: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the project.',
            in: 'query',
            name: 'patchDeploymentId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The project to apply this patch deployment to in the form `projects/*`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchDeploymentSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PatchDeploymentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1betaParentPatchJobsRoute = createRoute({
  method: 'get',
  path: '/v1beta/{parent}/patchJobs',
  tags: ['projects'],
  description: 'Get a list of patch jobs.',
  operationId: 'osconfig.projects.patchJobs.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If provided, this field specifies the criteria that must be met by patch jobs to be included in the response. Currently, filtering is only available on the patch_deployment field.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
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
            description: 'The maximum number of instance status to return.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A pagination token returned from a previous call that indicates where this listing should continue from.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. In the form of `projects/*`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListPatchJobsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1betaParentPatchJobsExecuteRoute = createRoute({
  method: 'post',
  path: '/v1beta/{parent}/patchJobs:execute',
  tags: ['projects'],
  description: 'Patch VM instances by creating and running a patch job.',
  operationId: 'osconfig.projects.patchJobs.execute',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The project in which to run this patch in the form `projects/*`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ExecutePatchJobRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PatchJobSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
