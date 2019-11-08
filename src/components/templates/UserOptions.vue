<template>
  <div class="user-options-content">

    

    <div class="user-options">
      <div class="user-options-info">
        <div class="d-none d-md-block user-options-name">{{user.nome}}</div>

        <div class="user-options-img">
          <Gravatar :email="user.email" alt="User" />
        </div>
      </div>

      <div class="toggle-user-config">
        <b-dropdown
          size="md"
          right
          variant="warning"
          toggle-class="text-decoration-none"
          no-caret
        >
          <template v-slot:button-content>
            <i class="fa fa-cog"></i>
          </template>

          <b-dropdown-item href="/admin">
            <router-link to="/admin" class="my-link my-link-blue my-theme-blue">
              <i class="fa fa-cogs mr-1"></i> Administração
            </router-link>
          </b-dropdown-item>

          <b-dropdown-item href @click.prevent="logout">
            <a href @click.prevent="logout" class="my-link my-link-red">
              <i class="fa fa-sign-out mr-1"></i> Sair
            </a>
          </b-dropdown-item>
        </b-dropdown>
      </div>

    </div>
  </div>
</template>

<script>
import { userKey } from "@/global";
import { mapState } from "vuex";
import Gravatar from "vue-gravatar";

export default {
  name: "UserOptions",
  components: { Gravatar },
  computed: mapState(["user", "visitant"]),

  methods: {
    logout() {
      localStorage.removeItem(userKey);
      this.$store.commit("setUser", null);
      this.$store.commit('setVisitant', false)
      this.$router.push({ name: "auth" });
    }
  },
 
};
</script>

<style>
.user-options-content {
  color: #fff;
  font-weight: bold;

  display: flex;
  justify-content: flex-end;
  align-items: center;

}

.user-options-content a.non-user {
  text-decoration: none;
  margin-right: 10px;
  color: #000;
  font-weight: bold;
}

.user-options-content a.non-user:hover {
  color: #fff;
}

.user-options {

  display: flex;
  justify-content: flex-end;
  align-items: center;

}

/* .user-options a {
  text-decoration: none;
} */

.user-options .toggle-user-config .dropdown-menu{
  border-radius: 0;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  
  margin-top:10px;
}

.user-options .toggle-user-config .dropdown-item{
  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 5px 10px;
}


.user-options-info {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  height: 100%;
  padding: 0px 10px;
}

.user-options-info .user-options-name {
  max-width: 150px;
  margin-right: 5px;

  font-size: 1.2rem;
  text-align: right;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.user-options-info span {
  margin-right: 10px;
}

.user-options-img > img {
  max-height: 40px;
  border-radius: 5px;
}

.my-link {
  padding: 3px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
}

.my-link:hover {
  color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  text-decoration: none;
}

.my-link-green {
  width: 140px;
  height: 32px;

  background: rgb(5, 197, 107);
  border-radius: 7px;
  border-right: 1px groove rgb(10, 145, 82);
  border-bottom: 1px groove rgb(10, 145, 82);

  text-decoration: none;
}

.my-link-blue {
  width: 140px;
  height: 32px;

  background: #007bff;
  border-radius: 7px;
  border-right: 1px groove #0b56a7;
  border-bottom: 1px groove #0b56a7;
}


.my-link-red {
  width: 65px;
  height: 32px;

  background: #dc143c;
  border-radius: 8px;
  border-right: 2px groove #920824;
  border-bottom: 1px groove #920824;

  text-decoration: none;
}
</style>