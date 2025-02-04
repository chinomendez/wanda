# docs

## 10.3.0

### Minor Changes

- 3e59214: Fixed multi page selection

### Patch Changes

- Updated dependencies [5f8abc6]
- Updated dependencies [3e59214]
- Updated dependencies [8d0c988]
- Updated dependencies [d601751]
  - @wonderflow/react-components@9.3.0

## 10.2.0

### Minor Changes

- 62c7fdc: Add new icon size and update icons size across components

### Patch Changes

- Updated dependencies [62c7fdc]
  - @wonderflow/react-components@9.2.0

## 10.1.0

### Minor Changes

- 7d1d15c: Add new fullWidth prop to textfield

### Patch Changes

- Updated dependencies [2900059]
- Updated dependencies [7d1d15c]
  - @wonderflow/react-components@9.1.0
  - @wonderflow/themes@8.1.0

## 10.0.0

### Major Changes

- 897705d: Add AspectRatio component

### Patch Changes

- Updated dependencies [897705d]
- Updated dependencies [897705d]
- Updated dependencies [897705d]
  - @wonderflow/react-components@9.0.0

## 9.0.0

### Major Changes

- f4dec7e: Add 6 new color tokens for a total of 72 shades. Updated themes with new highlight keys.

### Minor Changes

- f4dec7e: Add 6 new color tokens and 72 shades
- 0b0c10d: Add maxHeight property to Menu
- 00bd7e2: Add new `value` prop to Menu.Item
- 8eeecea: Add new `busy` property to Autocomplete

### Patch Changes

- c94628f: Fix table crash
- Updated dependencies [d1b2c29]
- Updated dependencies [0b0c10d]
- Updated dependencies [f19b7e8]
- Updated dependencies [101cbc3]
- Updated dependencies [00bd7e2]
- Updated dependencies [8eeecea]
- Updated dependencies [f4dec7e]
  - @wonderflow/react-components@8.1.0
  - @wonderflow/themes@8.0.0

## 8.0.0

### Major Changes

- 67aed15: Refactoring Tab component and remove obsolete code
- 67aed15: Refactoring Table component to improve performances and features:

  - Various rendering improvements
  - `hideFromList` column's prop is renamed into `isToggable`.
  - `activePageIndex` prop is renamed into `initialPageIndex`.
  - `onDataUpdate` prop is renamed into `onPaginationChange`.
  - Chanded types for `selectedLabel`.
  - `selectedActions` is now a function that returns a react node and pass `selectedRowIds` as parameter.
  - `onSelectionChange` prop has been removed.
  - `actionsRowComponent` prop has been removed.

### Minor Changes

- 67aed15: Add new Container `medium` size. The old `medium` dimension is now 'small'.

### Patch Changes

- Updated dependencies [67aed15]
- Updated dependencies [67aed15]
- Updated dependencies [67aed15]
  - @wonderflow/react-components@8.0.0

## 7.0.0

### Major Changes

- 1b19649: We dropped the deprecated plugin `postcss-env-function` and we introduced a new syntax to access and use tokens inside you css. Tokens must now be declared using `token()` function notation instead of `env()`.
- 9f286fe: Refactoring List component by adding List.Li element to have more control over markers and markers color
- e490be0: Rename Dropdown into Popover and add `matchTriggerWidth` property

### Patch Changes

- Updated dependencies [1b19649]
- Updated dependencies [1ae5dd0]
- Updated dependencies [2952dbc]
- Updated dependencies [a3da612]
- Updated dependencies [9079b08]
- Updated dependencies [9f286fe]
- Updated dependencies [e490be0]
- Updated dependencies [c53b855]
- Updated dependencies [2b02b8c]
- Updated dependencies [904f1c5]
- Updated dependencies [7452a9d]
  - @wonderflow/react-components@7.0.0
  - @wonderflow/icons@6.2.0

## 5.1.0

### Minor Changes

- a4c6dc8: Update expanded row style for Table
- 3ef1838: Update `selectedLabel` to function and enable custom text for selected items.

### Patch Changes

- Updated dependencies [a4c6dc8]
- Updated dependencies [b5a1272]
- Updated dependencies [90bea7c]
- Updated dependencies [a66769b]
- Updated dependencies [95fc95e]
- Updated dependencies [3ef1838]
- Updated dependencies [0353ebb]
  - @wonderflow/react-components@6.1.0
  - @wonderflow/icons@6.0.1

## 5.0.0

### Major Changes

- aa94785: Align versions

### Patch Changes

- Updated dependencies [aa94785]
  - @wonderflow/icons@6.0.0
  - @wonderflow/themes@6.0.0

## 4.0.0

### Major Changes

- 6706e4c: Rename all verical/horizontal padding/align props into vPadding/vAlign and hPadding/hAlign. This change has been made to keep a clean status of the code and reduce the required boilerplate.

### Minor Changes

- 5bca3b0: Add new `open` prop to Popover to programmatically open and close the popover

### Patch Changes

- Updated dependencies [6706e4c]
- Updated dependencies [9517873]
- Updated dependencies [92d2378]
- Updated dependencies [14afd7e]
- Updated dependencies [5bca3b0]
  - @wonderflow/react-components@6.0.0

## 3.6.0

### Minor Changes

- c7da4b1: Update sprite export path and improve Icon description

### Patch Changes

- Updated dependencies [c7da4b1]
  - @wonderflow/icons@5.4.0
  - @wonderflow/react-components@5.6.0

## 3.5.0

### Minor Changes

- 30d5f4c: Add new gap property to Skeleton
- 30d5f4c: Update shell index
- 30d5f4c: Add new Table component

### Patch Changes

- Updated dependencies [30d5f4c]
- Updated dependencies [19cd986]
- Updated dependencies [ee29f69]
- Updated dependencies [d0da160]
- Updated dependencies [30d5f4c]
- Updated dependencies [30d5f4c]
  - @wonderflow/react-components@5.5.0
  - @wonderflow/icons@5.3.0
  - @wonderflow/themes@5.2.0

## 3.4.0

### Minor Changes

- ddefb25: Fix navigation current page highlight

### Patch Changes

- Updated dependencies [ddefb25]
- Updated dependencies [ddefb25]
- Updated dependencies [ffc093a]
- Updated dependencies [ddefb25]
- Updated dependencies [054a4c5]
  - @wonderflow/react-components@5.4.0

## 3.3.1

### Patch Changes

- d332bb1: Update codeblock component
- 0292266: Set dark as default theme and update hero style
- b2fd46a: Updatfix menu trigger and update code-block style
- a26f8c9: Improve theme switcher
- 3a31b54: Add dynamic homepage video

## 3.3.0

### Minor Changes

- [`eafd1c0`](https://github.com/wonderflow-bv/wanda/commit/eafd1c03bafb9f4cd904145a4bd24f094eeb2e7b) Thanks [@equinusocio](https://github.com/equinusocio)! - Add new style and accessibility icons

### Patch Changes

- Updated dependencies [[`6319696`](https://github.com/wonderflow-bv/wanda/commit/63196963b4de52351e6b9631f97c2004d789ce6d), [`eafd1c0`](https://github.com/wonderflow-bv/wanda/commit/eafd1c03bafb9f4cd904145a4bd24f094eeb2e7b)]:
  - @wonderflow/react-components@5.3.0
  - @wonderflow/icons@5.2.0

## 3.2.0

### Minor Changes

- [`24266bd`](https://github.com/wonderflow-bv/wanda/commit/24266bd1b5ab548930eb577a1ab7ba7492c25ca9) Thanks [@equinusocio](https://github.com/equinusocio)! - Fix Skeleton display

### Patch Changes

- Updated dependencies [[`4d93699`](https://github.com/wonderflow-bv/wanda/commit/4d936994a89cf445504301fbf21901cfe31140a9), [`24266bd`](https://github.com/wonderflow-bv/wanda/commit/24266bd1b5ab548930eb577a1ab7ba7492c25ca9)]:
  - @wonderflow/react-components@5.2.0

## 3.1.0

### Minor Changes

- [`4b4b58e`](https://github.com/wonderflow-bv/wanda/commit/4b4b58e6918e550b43a3bd134e906e36eac4d270) Thanks [@equinusocio](https://github.com/equinusocio)! - Update dependencies

* [`07675a5`](https://github.com/wonderflow-bv/wanda/commit/07675a51fc79f23bc1064d721af05389a255618a) Thanks [@equinusocio](https://github.com/equinusocio)! - Update 16px icons to match the outline style. The solid style is now forced for icons sized 12px.

- [`c2aee59`](https://github.com/wonderflow-bv/wanda/commit/c2aee59786718bac49a6e755e846bf224c3b5541) Thanks [@equinusocio](https://github.com/equinusocio)! - Update themes import to resolve dist files even inside CSS

* [#57](https://github.com/wonderflow-bv/wanda/pull/57) [`21db8e3`](https://github.com/wonderflow-bv/wanda/commit/21db8e3854b6069bff51024d8939bfaff1280497) Thanks [@equinusocio](https://github.com/equinusocio)! - Add new theme keys to handle vibrancy backgrounds. You can now use also `global-vibrancy-background-soft` and `global-vibrancy-background-hard`

### Patch Changes

- [`86e47d6`](https://github.com/wonderflow-bv/wanda/commit/86e47d665b7949f9d47a8b5c3c765ef40354214e) Thanks [@equinusocio](https://github.com/equinusocio)! - Update some core deps and css output

- Updated dependencies [[`3c09f96`](https://github.com/wonderflow-bv/wanda/commit/3c09f96b39944e5bd63db1b6afa4a74522783f58), [`86e47d6`](https://github.com/wonderflow-bv/wanda/commit/86e47d665b7949f9d47a8b5c3c765ef40354214e), [`32240ba`](https://github.com/wonderflow-bv/wanda/commit/32240bad3c8ba9e8a0de6b1c96b372be89778331), [`4b4b58e`](https://github.com/wonderflow-bv/wanda/commit/4b4b58e6918e550b43a3bd134e906e36eac4d270), [`8c642ac`](https://github.com/wonderflow-bv/wanda/commit/8c642acd4fea4835c2670b604f39fa7e13e98412), [`40e8de4`](https://github.com/wonderflow-bv/wanda/commit/40e8de45f5638c1de4bf26a2f1612cfb3ac41263), [`07675a5`](https://github.com/wonderflow-bv/wanda/commit/07675a51fc79f23bc1064d721af05389a255618a), [`143bd9e`](https://github.com/wonderflow-bv/wanda/commit/143bd9e9dcf3a14522ea90fc6b8c84cf8beb79bd), [`c2aee59`](https://github.com/wonderflow-bv/wanda/commit/c2aee59786718bac49a6e755e846bf224c3b5541), [`13c9f37`](https://github.com/wonderflow-bv/wanda/commit/13c9f373e3e19c8de0f849e03d2fc2151815a2a5), [`21db8e3`](https://github.com/wonderflow-bv/wanda/commit/21db8e3854b6069bff51024d8939bfaff1280497)]:
  - @wonderflow/react-components@5.1.0
  - @wonderflow/icons@5.1.0
  - @wonderflow/themes@5.1.0

## 3.0.0

### Major Changes

- [#47](https://github.com/wonderflow-bv/wanda/pull/47) [`676c15d`](https://github.com/wonderflow-bv/wanda/commit/676c15dbe5c03855a6316da6c1af6ce054dccfa6) Thanks [@equinusocio](https://github.com/equinusocio)! - Rename SkeletonBlock into Skeleton and drop related dependencies

* [#37](https://github.com/wonderflow-bv/wanda/pull/37) [`d2295c8`](https://github.com/wonderflow-bv/wanda/commit/d2295c87074488882537ffdbb3fed6c7891a3eac) Thanks [@equinusocio](https://github.com/equinusocio)! - Rename Icon's `icon` property into `source` to allow custom icons.

  We updated the Icon component in order to allow custom icons where needed. This introduce a breaking change on the `name` property which is now named `source`.

### Minor Changes

- [#40](https://github.com/wonderflow-bv/wanda/pull/40) [`a5b0620`](https://github.com/wonderflow-bv/wanda/commit/a5b0620fbdee612cb8d131ffec0f967abfe933a8) Thanks [@equinusocio](https://github.com/equinusocio)! - Update current icon styles and rename `grid-2` icon into `grid`

* [#45](https://github.com/wonderflow-bv/wanda/pull/45) [`a37a9c8`](https://github.com/wonderflow-bv/wanda/commit/a37a9c83b231410bdaee3f4127635f9b12329542) Thanks [@equinusocio](https://github.com/equinusocio)! - Iconography has been completely refactored and a new Duotone style is now live.

### Patch Changes

- [`b5c3d8c`](https://github.com/wonderflow-bv/wanda/commit/b5c3d8c96ce33b4c3095989bee5b2bbc13f7a056) Thanks [@equinusocio](https://github.com/equinusocio)! - Fix view source link for components doc

- Updated dependencies [[`43ea50f`](https://github.com/wonderflow-bv/wanda/commit/43ea50f02b7d2863e1516685259b5e180ce03592), [`a5b0620`](https://github.com/wonderflow-bv/wanda/commit/a5b0620fbdee612cb8d131ffec0f967abfe933a8), [`a37a9c8`](https://github.com/wonderflow-bv/wanda/commit/a37a9c83b231410bdaee3f4127635f9b12329542), [`b021143`](https://github.com/wonderflow-bv/wanda/commit/b0211437f7d67e2f7e3dfe78ceadba15c69787f9), [`98ce5f9`](https://github.com/wonderflow-bv/wanda/commit/98ce5f91e499493980ed95f1e9cf756bb641a996), [`676c15d`](https://github.com/wonderflow-bv/wanda/commit/676c15dbe5c03855a6316da6c1af6ce054dccfa6), [`944b069`](https://github.com/wonderflow-bv/wanda/commit/944b069168e12a21cd4a6cc2c53cf9a49f50d639), [`7c37cca`](https://github.com/wonderflow-bv/wanda/commit/7c37cca6d1abae2d7500e74b0bdead9a45671809), [`d2295c8`](https://github.com/wonderflow-bv/wanda/commit/d2295c87074488882537ffdbb3fed6c7891a3eac)]:
  - @wonderflow/react-components@5.0.0
  - @wonderflow/icons@5.0.0
  - @wonderflow/themes@5.0.0

## 3.0.0-beta.2

### Major Changes

- [#47](https://github.com/wonderflow-bv/wanda/pull/47) [`676c15d`](https://github.com/wonderflow-bv/wanda/commit/676c15dbe5c03855a6316da6c1af6ce054dccfa6) Thanks [@equinusocio](https://github.com/equinusocio)! - Rename SkeletonBlock into Skeleton and drop related dependencies

### Patch Changes

- [`b5c3d8c`](https://github.com/wonderflow-bv/wanda/commit/b5c3d8c96ce33b4c3095989bee5b2bbc13f7a056) Thanks [@equinusocio](https://github.com/equinusocio)! - Fix view source link for components doc

- Updated dependencies [[`676c15d`](https://github.com/wonderflow-bv/wanda/commit/676c15dbe5c03855a6316da6c1af6ce054dccfa6)]:
  - @wonderflow/react-components@5.0.0-beta.2
  - @wonderflow/themes@2.0.0-beta.0

## 3.0.0-beta.1

### Minor Changes

- [#40](https://github.com/wonderflow-bv/wanda/pull/40) [`a5b0620`](https://github.com/wonderflow-bv/wanda/commit/a5b0620fbdee612cb8d131ffec0f967abfe933a8) Thanks [@equinusocio](https://github.com/equinusocio)! - Update current icon styles and rename `grid-2` icon into `grid`

* [#45](https://github.com/wonderflow-bv/wanda/pull/45) [`a37a9c8`](https://github.com/wonderflow-bv/wanda/commit/a37a9c83b231410bdaee3f4127635f9b12329542) Thanks [@equinusocio](https://github.com/equinusocio)! - Iconography has been completely refactored and a new Duotone style is now live.

### Patch Changes

- Updated dependencies [[`43ea50f`](https://github.com/wonderflow-bv/wanda/commit/43ea50f02b7d2863e1516685259b5e180ce03592), [`a5b0620`](https://github.com/wonderflow-bv/wanda/commit/a5b0620fbdee612cb8d131ffec0f967abfe933a8), [`a37a9c8`](https://github.com/wonderflow-bv/wanda/commit/a37a9c83b231410bdaee3f4127635f9b12329542), [`b021143`](https://github.com/wonderflow-bv/wanda/commit/b0211437f7d67e2f7e3dfe78ceadba15c69787f9), [`98ce5f9`](https://github.com/wonderflow-bv/wanda/commit/98ce5f91e499493980ed95f1e9cf756bb641a996), [`944b069`](https://github.com/wonderflow-bv/wanda/commit/944b069168e12a21cd4a6cc2c53cf9a49f50d639), [`7c37cca`](https://github.com/wonderflow-bv/wanda/commit/7c37cca6d1abae2d7500e74b0bdead9a45671809)]:
  - @wonderflow/react-components@5.0.0-beta.1
  - @wonderflow/icons@5.0.0-beta.0

## 3.0.0-beta.0

### Major Changes

- [#37](https://github.com/wonderflow-bv/wanda/pull/37) [`d2295c8`](https://github.com/wonderflow-bv/wanda/commit/d2295c87074488882537ffdbb3fed6c7891a3eac) Thanks [@equinusocio](https://github.com/equinusocio)! - Rename Icon's `icon` property into `source` to allow custom icons.

  We updated the Icon component in order to allow custom icons where needed. This introduce a breaking change on the `name` property which is now named `source`.

### Patch Changes

- Updated dependencies [[`d2295c8`](https://github.com/wonderflow-bv/wanda/commit/d2295c87074488882537ffdbb3fed6c7891a3eac)]:
  - @wonderflow/react-components@5.0.0-beta.0

## 2.0.3

### Patch Changes

- Updated dependencies [[`5071650`](https://github.com/wonderflow-bv/wanda/commit/5071650f62e84d05ca4b4876ffff88da69a83221)]:
  - @wonderflow/react-components@4.0.2

## 2.0.2

### Patch Changes

- [`14fdeca`](https://github.com/wonderflow-bv/wanda/commit/14fdecae8255483d6faf7d47a8c61ac35b410922) Thanks [@equinusocio](https://github.com/equinusocio)! - Update installation guide about themes import

## 2.0.1

### Patch Changes

- [#32](https://github.com/wonderflow-bv/wanda/pull/32) [`5a87233`](https://github.com/wonderflow-bv/wanda/commit/5a87233a7972f1b319648c3d447ac7ad5ae70236) Thanks [@equinusocio](https://github.com/equinusocio)! - fix imports

- Updated dependencies [[`5a87233`](https://github.com/wonderflow-bv/wanda/commit/5a87233a7972f1b319648c3d447ac7ad5ae70236)]:
  - @wonderflow/react-components@4.0.1

## 2.0.0

### Major Changes

- [`16b7844`](https://github.com/wonderflow-bv/wanda/commit/16b78449102b464a36bb5b23d82b6d3b0b55566f) Thanks [@equinusocio](https://github.com/equinusocio)! - Move icons as public deps and update installation guide

### Patch Changes

- [#28](https://github.com/wonderflow-bv/wanda/pull/28) [`60ad976`](https://github.com/wonderflow-bv/wanda/commit/60ad976e1548dccabd1bc479d41b91ef23407846) Thanks [@equinusocio](https://github.com/equinusocio)! - add beta label to table

* [`1b3c14c`](https://github.com/wonderflow-bv/wanda/commit/1b3c14c9c61aea31790cd5ab7ffd303a19441c6f) Thanks [@equinusocio](https://github.com/equinusocio)! - Remove old repositories references

* Updated dependencies [[`16b7844`](https://github.com/wonderflow-bv/wanda/commit/16b78449102b464a36bb5b23d82b6d3b0b55566f), [`e44a49c`](https://github.com/wonderflow-bv/wanda/commit/e44a49c27fec979aa80b4094369b2cc57d7682c4)]:
  - @wonderflow/react-components@4.0.0

## 1.53.11

### Patch Changes

- Updated dependencies [[`5d6fda0`](https://github.com/wonderflow-bv/wanda/commit/5d6fda0a920f5915741a6b4f0c6bd9ac5903388d), [`23dcabe`](https://github.com/wonderflow-bv/wanda/commit/23dcabe148c3420b286d78e06abc82e627dfe083), [`4a4464b`](https://github.com/wonderflow-bv/wanda/commit/4a4464b034dbf18fc75ed355454ba7bbdd4b67b4)]:
  - @wonderflow/themes@1.0.2
  - @wonderflow/react-components@3.1.6

## 1.53.10

### Patch Changes

- Updated dependencies []:
  - @wonderflow/react-components@3.1.5

## 1.53.9

### Patch Changes

- Updated dependencies [aa91e4d]
  - @wonderflow/themes@1.0.1
  - @wonderflow/react-components@3.1.4

## 1.53.8

### Patch Changes

- @wonderflow/react-components@3.1.3
