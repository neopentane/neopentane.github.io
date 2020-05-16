<template>
  <div id="app">
    <v-app id="inspire">
      <v-app id="c">
        <v-navigation-drawer v-model="drawer" app>
          <v-list dense>
            <v-list-item link>
              <v-list-item-action>
                <v-icon>dashboard</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Dashboard</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-action>
                <v-icon>group</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Candidates</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-action>
                <v-icon>work</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Jobs</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-action>
                <v-icon>message</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Mailbox</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-action>
                <v-icon>settings</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Settings</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item link>
              <v-list-item-action>
                <v-icon>waves</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Pools</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-action>
                <v-icon>bar_chart</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Assesments</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-action>
                <v-icon>supervised_user_circle</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Team Member</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-action>
                <v-icon>attach_money</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Billing</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-action>
                <v-icon>assignment</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Guidlines</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-action>
                <v-icon>feedback</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Feedback</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-action>
                <v-icon>contact_support</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Contact us</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-app-bar app color="white" flat>
          <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <v-toolbar-title>
            <div>
              <v-breadcrumbs :items="items" large></v-breadcrumbs>
            </div> </v-toolbar-title
          ><v-spacer></v-spacer>
          BACK
        </v-app-bar>

        <v-content>
          <v-container grid-list-md text-xs-start>
            <v-layout row wrap>
              <v-flex md8 sm12>
                <v-layout row wrap>
                  <v-flex xl2 lg3 md4 sm6>
                    <v-avatar size="144">
                      <img
                        src="https://www.w3schools.com/howto/img_avatar.png"
                        alt="John"
                      />
                    </v-avatar>
                  </v-flex>
                  <v-flex xl10 lg9 md8 sm6>
                    <p class="display-1 text--primary font-weight-bold">
                      Kamal Pratap
                    </p>
                    <p class="headline text--secondary">full stack developer</p>
                    <p class="headline text--secondary">last activity</p>
                  </v-flex>
                </v-layout>
                <v-toolbar class="ma-8" flat>
                  <v-tabs
                    color="#11acfa"
                    background-color="white"
                    v-model="active_tab"
                    class="elivation-0"
                    grow
                  >
                    <v-tab :key="1">
                      Overview
                    </v-tab>

                    <v-tab key="2">
                      Activity
                    </v-tab>

                    <v-tab :key="3">
                      Assesments
                    </v-tab>

                    <v-tab :key="4">
                      Files
                    </v-tab>

                    <v-tab :key="5">
                      Resume
                    </v-tab>
                  </v-tabs>
                </v-toolbar>
                <v-card :shaped="true" class="rounded-card ma-8">
                  <v-card-title>
                    Information
                    <v-spacer></v-spacer>
                    <v-btn x-small fab ripple color="white" class="elevation-0">
                      <v-icon>add_circle_outline</v-icon>
                    </v-btn>
                  </v-card-title>
                  <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :items-per-page="5"
                    :hide-default-footer="true"
                    :disable-sort="true"
                  >
                  </v-data-table>
                </v-card>
                <v-card :shaped="true" class="rounded-card ma-8">
                  <v-card-title> Experience </v-card-title>
                  <v-card-subtitle> Lead Design</v-card-subtitle>
                  <v-card-text>
                    Google Inc. <v-spacer></v-spacer> Spet, 2019- Dec 2019
                    <v-spacer></v-spacer> During my internship , I developed UI
                    and UX for android app called google Keep . I completl
                    redisgned the application</v-card-text
                  >
                </v-card>
                <v-layout row wrap>
                  <v-flex xl6 lg6>
                    <v-card :shaped="true" class="rounded-card ma-4">
                      <v-card-title> Education </v-card-title>
                      <v-card-subtitle class="font-weight-medium">
                        SSC
                      </v-card-subtitle>
                      <v-card-text>
                        St mary highschool <v-spacer></v-spacer> Spet, 2019- Dec
                        2019 <v-spacer></v-spacer> During my internship , I
                        developed UI and UX for android app called google Keep .
                        I completl redisgned the application
                        <v-spacer></v-spacer> CGPA: 9.2
                      </v-card-text>
                      <v-card-subtitle class="font-weight-medium">
                        HSC
                      </v-card-subtitle>
                      <v-card-text>
                        St mary highschool <v-spacer></v-spacer> Spet, 2019- Dec
                        2019 <v-spacer></v-spacer> During my internship , I
                        developed UI and UX for android app called google Keep .
                        I completl redisgned the application
                        <v-spacer></v-spacer> Percentage : 95.6%
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xl6 lg6>
                    <v-card :shaped="true" class="rounded-card ma-4">
                      <v-card-title> Skills </v-card-title>
                      <v-card-subtitle> Lead Design</v-card-subtitle>
                      <v-card-text>
                        <v-btn
                          rounded
                          large
                          color="black--text font-weight-light info pa-5 ma-2 elevation-0"
                          >Web Development</v-btn
                        >
                        <v-btn
                          rounded
                          large
                          color="black--text font-weight-light info pa-5 ma-2 elevation-0 "
                          >Python</v-btn
                        >
                        <v-btn
                          rounded
                          large
                          color="black--text font-weight-light info pa-5 ma-2 elevation-0"
                          >CSS</v-btn
                        >
                        <v-btn
                          rounded
                          large
                          color="black--text font-weight-light info pa-5 ma-2 elevation-0"
                          >Python</v-btn
                        >
                        <v-btn
                          rounded
                          large
                          color="black--text font-weight-light info pa-5 ma-2 elevation-0"
                          >CSS</v-btn
                        >
                        <v-btn
                          rounded
                          large
                          color="black--text font-weight-light info pa-5 ma-2 elevation-0"
                          >Web Development</v-btn
                        >
                        <v-btn
                          rounded
                          large
                          color="black--text font-weight-light info pa-5 ma-2 elevation-0"
                          >Web Development</v-btn
                        >
                        <v-btn
                          rounded
                          large
                          color="black--text font-weight-light info pa-5 ma-2 elevation-0 "
                          >Python</v-btn
                        >
                        <v-btn
                          rounded
                          large
                          color="black--text font-weight-light info pa-5 ma-2 elevation-0"
                          >CSS</v-btn
                        >
                        <v-btn
                          rounded
                          large
                          color="black--text font-weight-light info pa-5 ma-2 elevation-0"
                          >Python</v-btn
                        >
                        <v-btn
                          rounded
                          large
                          color="black--text font-weight-light info pa-5 ma-2 elevation-0"
                          >CSS</v-btn
                        >
                        <v-btn
                          rounded
                          large
                          color="black--text font-weight-light info pa-5 ma-2 elevation-0"
                          >Web Development</v-btn
                        >
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex md4 sm12>
                <v-card :shaped="true" class="rounded-card ma-8">
                  <v-simple-table>
                    <template v-slot:default>
                      <tbody>
                        <tr>
                          <td>Evalution</td>
                          <td>
                            <v-icon small color="#11acfa">event</v-icon
                            ><span class="blue--text">shedule</span>
                          </td>
                          <td><v-icon small>share</v-icon></td>
                          <td><v-icon small> send </v-icon></td>
                          <td>More</td>
                        </tr>
                        <tr>
                          <td>Job name</td>
                          <td></td>
                          <td>
                            <v-icon color="#11acfa">done</v-icon
                            ><span class="blue--text">Proceed</span>
                          </td>
                          <td><v-icon>block</v-icon></td>
                          <td><v-icon>more_horiz</v-icon></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Job name</td>
                          <td></td>
                          <td>
                            <v-icon color="#11acfa">done</v-icon
                            ><span class="blue--text">Proceed</span>
                          </td>
                          <td><v-icon>block</v-icon></td>
                          <td><v-icon>more_horiz</v-icon></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-card>
                <v-card :shaped="true" class="rounded-card ma-8">
                  <v-card-title
                    >Team Notes
                    <v-spacer></v-spacer>
                    <v-btn x-small fab ripple color="white" class="elevation-0">
                      <v-icon>add_circle_outline</v-icon>
                    </v-btn>
                  </v-card-title>
                  <v-simple-table>
                    <template v-slot:default>
                      <tbody>
                        <tr>
                          <td>
                            <v-avatar color="#11acfa" size="36">
                              <span class="white--text">KP</span>
                            </v-avatar>
                          </td>
                          <td>
                            Kamal Peterson<span
                              class="caption font-weight-thin"
                            >
                              &bull;10:30 pm
                            </span>
                            <p class="caption">
                              Hey guys I pushed my progress to master branch
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <v-avatar color="#11acfa" size="36">
                              <span class="white--text">KP</span>
                            </v-avatar>
                          </td>
                          <td>
                            Kamal Peterson<span
                              class="caption font-weight-thin"
                            >
                              &bull;10:30 pm
                            </span>
                            <p class="caption">
                              Hey guys I pushed my progress to master branch
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <v-avatar color="#11acfa" size="36">
                              <span class="white--text">KP</span>
                            </v-avatar>
                          </td>
                          <td>
                            Kamal Peterson<span
                              class="caption font-weight-thin"
                            >
                              &bull;10:30 pm
                            </span>
                            <p class="caption">
                              Hey guys I pushed my progress to master branch
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <v-avatar color="#11acfa" size="36">
                              <span class="white--text">KP</span>
                            </v-avatar>
                          </td>
                          <td>
                            Kamal Peterson<span
                              class="caption font-weight-thin"
                            >
                              &bull;10:30 pm
                            </span>
                            <p class="caption">
                              Hey guys I pushed my progress to master branch
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-card>
                <v-card :shaped="true" class="rounded-card ma-8">
                  <v-card-title>
                    Tasks
                    <v-spacer></v-spacer>
                    <v-btn x-small fab ripple color="white" class="elevation-0">
                      <v-icon>add_circle_outline</v-icon>
                    </v-btn>
                  </v-card-title>
                  <v-simple-table>
                    <template v-slot:default>
                      <tbody>
                        <tr>
                          <td>
                            <v-checkbox
                              color="#11acfa"
                              v-model="checkbox1"
                              :label="'Add Checkout Button'"
                            ></v-checkbox>
                            <p class="caption font-weight-thin">
                              2 Min ago <v-icon small>event</v-icon> Due 03:00
                              pm 02/06/2020
                            </p>
                          </td>
                          <td>
                            <v-avatar color="#11acfa" size="36">
                              <span class="white--text">KP</span>
                            </v-avatar>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <v-checkbox
                              color="#11acfa"
                              v-model="checkbox2"
                              :label="'Add Checkout Button'"
                            ></v-checkbox>
                            <p class="caption font-weight-thin">
                              2 Min ago <v-icon small>event</v-icon> Due 03:00
                              pm 02/06/2020
                            </p>
                          </td>
                          <td>
                            <v-avatar color="#11acfa" size="36">
                              <span class="white--text">KP</span>
                            </v-avatar>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <v-checkbox
                              color="#11acfa"
                              v-model="checkbox3"
                              :label="'Add Checkout Button'"
                            ></v-checkbox>
                            <p class="caption font-weight-thin">
                              2 Min ago <v-icon small>event</v-icon> Due 03:00
                              pm 02/06/2020
                            </p>
                          </td>
                          <td>
                            <v-avatar color="#11acfa" size="36">
                              <span class="white--text">KP</span>
                            </v-avatar>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <v-checkbox
                              color="#11acfa"
                              v-model="checkbox4"
                              :label="'Add Checkout Button'"
                            ></v-checkbox>
                            <p class="caption font-weight-thin">
                              2 Min ago <v-icon small>event</v-icon> Due 03:00
                              pm 02/06/2020
                            </p>
                          </td>
                          <td>
                            <v-avatar color="#11acfa" size="36">
                              <span class="white--text">KP</span>
                            </v-avatar>
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-content>
      </v-app>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: false,
    active_tab: "2",
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    items: [
      {
        text: "EMPLOYEES",
        disabled: false,
        href: "#"
      },
      {
        text: "PROFILES",
        disabled: true,
        href: "#"
      }
    ],
    headers: [
      { text: "Email", value: "1" },
      { text: "Shreeramkelkar7@gmail.com", value: "2" }
    ],
    desserts: [
      {
        1: "Phone",
        2: "+91 877877778"
      },
      {
        1: "Socail",
        2: "shreeramkelkar7@gmail.com"
      },
      {
        1: "Links",
        2: "codepen.io/kamal"
      }
    ]
  })
};
</script>

<style>
.nopadding {
  padding: 1px;
}
.rounded-card {
  border-radius: 120px, 120px, 120px, 120px;
}
</style>
