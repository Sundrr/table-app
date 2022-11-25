<template>
  <div class="page">
    <div class="card">
      <header class="header">
        <section class="nav">
          <div class="nav__left">
            <div class="nav__logo">
              <p>D</p>
            </div>
            <div class="nav__title">
              <p>Dashboard</p>
            </div>
          </div>
          <div class="nav__right">
            <div class="nav__help">
              <p>Help</p>
              <icon-question />
            </div>
            <div class="nav__upgrade">
              <p>UPGRADE</p>
            </div>
            <div class="nav__avatar" >
              <img :src="avatar" alt="avatar">
            </div>
          </div>
        </section>
        <section class="tabs">
          <p class="tabs__item selected">Analyze</p>
          <p class="tabs__item">My campaigns</p>
          <p class="tabs__item">Configure</p>
        </section>
      </header>
      <section class="body">
        <aside class="aside">
          <div class="create-button">
            <icon-plus />
            <p>Create new</p>
          </div>
          <filter-button
              v-for="data in filterData"
              :key="data.id"
              :data="data"
              v-model:filter="filter"
          />
        </aside>
        <main class="main">
          <div class="main__header">
            <p>Dashboard</p>
            <div class="main__button-block">
              <div class="main__datepicker">
                <p>Aug 21, 2021 · Sep 21 2021</p>
                <icon-dropdown />
              </div>
              <div class="main__button">
                <icon-printer class="main__icon"/>
              </div>
              <div class="main__button">
                <icon-download class="main__icon"/>
              </div>
            </div>
          </div>
          <table-main :filter="filter"/>
        </main>
      </section>
    </div>
  </div>
</template>


<script>
import FilterButton from "@/components/elements/FilterButton";
import TableMain from "@/components/table/TableMain";
import IconPlus from "@/components/icons/IconPlus";
import IconPrinter from "@/components/icons/IconPrinter";
import IconDownload from "@/components/icons/IconDownload";
import IconDropdown from "@/components/icons/IconDropdown";
import IconQuestion from "@/components/icons/IconQuestion";
import { filterData } from "@/utils/data";
import avatar from '@/assets/Fernando Pidrilio.png';

export default {
  name: "TablePage",

  components: {
    FilterButton,
    TableMain,
    IconPlus,
    IconPrinter,
    IconDownload,
    IconDropdown,
    IconQuestion,
  },

  data() {
    return {
      avatar,
      filterData,
      filter: 'all',
    };
  },
}
</script>


<style lang="scss" scoped>
  .page {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F3F2F2;
  }

  .card {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 60%;
    border-radius: 20px;
    box-shadow: 0 33px 43px rgba(0, 0, 0, 0.1),
                0 9.94853px 12.9632px rgba(0, 0, 0, 0.0651589),
                0 4.13211px 5.38427px rgba(0, 0, 0, 0.05),
                0 1.4945px 1.94738px rgba(0, 0, 0, 0.0348411);
    background-color: white;
  }

  .header {
    height: 120px;
    border-bottom: 1px dashed #E3E5E6;
  }

  .body {
    flex: 1;
    display: flex;
    background-color: #E2F0F0;
    border-radius: 0 0 20px 20px;
  }

  .aside {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    margin-top: 32px;
    margin-left: 100px;
  }

  .main {
    flex: 3;
    display: flex;
    flex-direction: column;
    font-family: "Quicksand", sans-serif;
    font-weight: 500;
    font-size: 34px;
    margin-right: 40px;
    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 12px 0;
    }
    &__button-block {
      display: flex;
      gap: 8px;
    }
    &__button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 4px;
      background-color: #F7F9FA;
      fill: #78909C;
    }
    &__icon {
      width: 12px;
      height: 12px;
    }
    &__datepicker {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 0 16px;
      border: 1px solid #C6CACC;
      border-radius: 10px;
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 14px;
    }
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 12px 16px;
    &__left {
      display: flex;
      gap: 10px;
      font-family: "Racing Sans One", sans-serif;
      font-weight: 400;
      font-size: 24px;
    }
    &__logo {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      box-shadow: 0 2px 6px rgba(8, 35, 48, 0.16),
                  0 1px 2px rgba(8, 35, 48, 0.24);
      border-radius: 10px;
      color: #367BF5;
    }
    &__title {
      display: flex;
      align-items: center;
      color: #5E6366;
    }
    &__right {
      display: flex;
      gap: 16px;
    }
    &__help {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 96px;
      height: 40px;
      padding: 0 8px;
      background: #F7F9FA;
      border-radius: 10px;
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 16px;
      color: #5E6366;
    }
    &__upgrade {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 96px;
      height: 40px;
      box-shadow: 0 4px 8px rgba(54, 123, 245, 0.16),
                  0 2px 4px rgba(54, 123, 245, 0.24);
      border-radius: 10px;
      font-family: "Roboto", sans-serif;
      font-weight: 500;
      font-size: 14px;
      letter-spacing: 0.75px;
      color: #367BF5;
    }
    &__avatar {
      border-radius: 99px;
      color: red;
    }
  }

  .tabs {
    display: flex;
    gap: 12px;
    margin-left: 400px;
    &__item {
      padding: 16px;
      color: #5E6366;
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 16px;
    }
  }

  .selected {
    border: 1px solid #C6CACC;
    border-bottom: none;
    border-radius: 4px 4px 0 0;
    color: rgba(0, 0, 0, 0.87);
  }

  .create-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 16px;
    width: 180px;
    background-color: white;
    border-radius: 100px;
    box-shadow: 0 16px 24px rgba(54, 123, 245, 0.16),
                0 6px 12px rgba(54, 123, 245, 0.16);
    font-family: "Quicksand", sans-serif;
    font-weight: 500;
    font-size: 20px;
    color: #367BF5;
  }
</style>