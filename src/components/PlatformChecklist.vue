<template>
  <div class="platform-checklist">
    <fieldset class="platform-checklist-fieldset" aria-describedby="select-game-platforms">
        <legend class="platform-checklist-legend">
          <span>
            Select which game platforms you want to view?
          </span>
        </legend>
        <div class="platform-checklist-options">
          <div class="platform-checklist-options-item">
            <input class="platform-checklist-options-item-input" id="xbox" name="xbox" type="checkbox" value="xbox">
            <label class="platform-checklist-options-item-label" for="xbox">
              <img class="platform-checklist-options-item-label-image" src="../assets/images/Xbox-Logo.png" alt="Xbox Logo"/>
            </label>
          </div>
          <div class="platform-checklist-options-item">
            <input class="platform-checklist-options-item-input" id="playstation" name="playstation" type="checkbox" value="playstation">
            <label class="platform-checklist-options-item-label" for="playstation">
              <img class="platform-checklist-options-item-label-image" src="../assets/images/Playstation-Logo.png" alt="Playstation Logo"/>
            </label>
          </div>
          <div class="platform-checklist-options-item">
            <input class="platform-checklist-options-item-input" id="pc" name="pc" type="checkbox" value="pc">
            <label class="platform-checklist-options-item-label" for="pc">
              <img class="platform-checklist-options-item-label-image" src="../assets/images/PC-Logo.png" alt="PC Logo"/>
            </label>
          </div>
          <div class="platform-checklist-options-item">
            <input class="platform-checklist-options-item-input" id="switch" name="switch" type="checkbox" value="switch">
            <label class="platform-checklist-options-item-label" for="switch">
              <img class="platform-checklist-options-item-label-image" src="../assets/images/Switch-Logo.png" alt="Switch Logo"/>
            </label>
          </div>
        </div>
      </fieldset>
  </div>
</template>

<script>
export default {
  name: 'platformChecklist',
  props: {
  }
}
</script>

<style scoped lang="scss">
  .platform-checklist {
    width: 100%;
    &-fieldset {
      border: none;
      padding: 0;
      margin: 0;
    }
    &-legend {
      display: none;
    }
    &-options {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      &-item{
        & input[type=checkbox] {
          display:none;
        }
        &-label {
          display: block;
          width: 40px;
          height: 40px;
          cursor: pointer;
          &-image {
            width: 100%;
            height: 100%;
            border-radius: 4px;
          }
        }
      }
    }
  }
  :checked+label img {
    opacity: 0.5;
  }
</style>
