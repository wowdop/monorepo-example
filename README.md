# Mono repo NX setup

**Table of contents**
1. [Tags and Dependencies](#tags-and-dependencies)
    * [Tags](#tags)
    * [Dependencies](#dependencies)
1. [Generators](#generators)
    * [tag](#tag)
    * [ui](#ui)
1. [NX Dependency Graph](#nx-dependency-graph)
    1. [No change made to the project](#no-change-made-to-the-project)
    1. [TextField library component change](#textfield-library-component-change)
    1. [FeatureCart library component change](#featurecart-library-component-change)
1. [Code Owners](#code-owners)
1. [Keeping code moving and accessible](#keeping-code-moving-and-accessible)

1. [Short Pull Requests](#short-pull-requests)

1. [production vs experimental](#production-vs-experimental)


1. [Feature list to cover](#feature-list-to-cover)
1. [Other topics to consider working on](#other-topics-to-consider-working-on)
1. [Structure example](#structure-example)

The **apps** and **libraries** in the monorepo can make use of tags to mark rules for dependencies.


Back to [Mono repo NX setup](#mono-repo-nx-setup)

### Tags

You can add `"tags": ["type:app", "type:util", "type:feature", "type:ui", "type:theme"]` to the `project.json` file.

### Dependencies

* Apps should only depend on feature and util
* feature should only depend on ui, util and data-access
* ui should only depend on util
* data-access should only depend on util

Make use of the **sourceTag** and **onlyDependantOnLibsWithTags** properties, inside of `"@nrwl/nx/enforce-module-boundaries"` present in the `.eslintrc.json` file to create rules and mark project dependencies.

Example:

```
{
  "sourceTag": "type:app",
  "onlyDependantOnLibsWithTags": ["type:feature", "type:util"]
},
{
  "sourceTag": "type:feature",
  "onlyDependantOnLibsWithTags": ["type:ui", "type:util", "data-access"]
},
{
  "sourceTag": "type:ui",
  "onlyDependantOnLibsWithTags": ["type:util"]
},
{
  "sourceTag": "type:data-access",
  "onlyDependantOnLibsWithTags": ["type:util"]
},

```


Back to [Mono repo NX setup](#mono-repo-nx-setup)

## Generators

This mono repo has two generators present, **tag** and **ui**, as examples.

### tag

The **tag** generator creates libraries and assigns tags on creation. You can chose your library name, platform, scope and tag.

Usage:
```
nx workspace-genearator tag my-new-library
```
or use the VisualStudio code addon.

### ui

The **ui** generator uses template files to bootstrap a component with all it's starter files.


Back to [Mono repo NX setup](#mono-repo-nx-setup)

## NX Dependency Graph

Running `nx dep-graph`


Back to [Mono repo NX setup](#mono-repo-nx-setup)

## NX affected

### No change made to the project

Running `nx affected:build` should come back with a message: ` NX  No projects with "build" were run`

### TextField library component change

Running `nx affected:build` should come back with a message: 


```
NX  Running target build for 3 project(s) and 1 task(s) they depend on:

  - healthcare
  - vitamin
  - web
```

All **healthcare**, **vitamin** and **web** have in the dependency tree the TextField component.

### FeatureCart library component change

Running `nx affected:build` should come back with a message: 


```
NX  Running target build for 1 project(s) and 1 task(s) they depend on:

  - healthcare
```

Only the **healthcare** app depends on **FeatureCart**


Back to [Mono repo NX setup](#mono-repo-nx-setup)

## Code Owners

As you can see in the **CODEOWNERS** file, you can configure protected paths inside your mono repo, that can be picked up by GitHub and GitLab. This will enable an option in GitHub or GitLab when creating custom protection rules for branches, that will allow you to check that this pull request must be approved by one of the entities with access present in the **CODEOWNERS** file.

## Keeping code moving and accessible

### Short Pull Requests

Split tickets into smaller ones or use tasks to evolve into keeping pull requests short lived to speed up access to features and bug fixes for other teams.

### production vs experimental

Develop new features under `"sourceTag": "stability:experimental"`, so linter can complain if anyone want to use it in production.

## Feature list to cover

* enhance the mono-repo with more generators and rules
* component file structure (pages, features, ui, util, data-access)
* theming: base and variation themes
* using media files: vectors, images etc
* using simple icons as vectors in fonts
* responsive or fluid typography
* SEO evaluation and guide

## Other topics to consider working on

* Custom ESLint rules and fix
* Support multiple API version
* Pipeline distrubute workload (split into multiple jobs using `nx print-affected`)

## Structure example

```
├── apps
│   ├── clothes4u
│   ├── get-fit
│   ├── my-app
│   └── win-machine
└── libs
    ├── feature
    │   ├── card
    │   ├── cta
    │   ├── footer
    │   ├── hero
    │   ├── login
    │   └── side-menu
    ├── feature-get-fit
    │   ├── checkout
    │   │   ├── basket
    │   │   ├── buy-more
    │   │   ├── invoice
    │   │   ├── product-list
    │   │   └── product-review
    │   └── color-picker
    ├── feature-my-app
    │   ├── avatar-builder
    │   ├── cash-manager
    │   ├── profile-selector
    │   ├── shared
    │   │   ├── live-status
    │   │   └── profile-display
    │   └── time-manager
    ├── store
    ├── theme
    ├── theme-get-fit
    ├── theme-my-app
    ├── ui
    │   ├── button
    │   ├── divider
    │   ├── flex
    │   ├── grid
    │   ├── smart-table
    │   └── text-field
    └── util
        ├── calculator
        ├── formatter
        └── language
```
