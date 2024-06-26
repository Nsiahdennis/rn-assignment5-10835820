import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeightSpacer, ReusableText, WidthSpacer } from "../../components";
import { COLORS, SIZES } from "../../constants/theme";
import { Ionicons } from "@expo/vector-icons";
import uidata from "../../constants/uidata";

const index = () => {
  return (
    <SafeAreaView style={{ paddingHorizontal: 12 }}>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View>
            <Image source={require("./../../assets/images/profile.png")} />
          </View>
          <WidthSpacer width={10} />
          <View>
            <ReusableText
              text={"Welcome back"}
              family={"light"}
              size={SIZES.medium}
              color={COLORS.gray2}
            />
            <ReusableText
              text={"Eric Atsu"}
              family={"medium"}
              size={SIZES.large}
              color={COLORS.black}
            />
          </View>
        </View>
        <View>
          <View
            style={{
              backgroundColor: COLORS.gray,
              padding: 13,
              borderRadius: 100,
            }}
          >
            <Ionicons name={"search"} size={16} />
          </View>
        </View>
      </View>

      <HeightSpacer height={20} />

      <View style={{ justifyContent: "space-around", alignItems: "center" }}>
        <Image
          source={require("./../../assets/images/Card.png")}
          style={{ width: SIZES.width, resizeMode: "contain" }}
        />
      </View>

      <HeightSpacer height={30} />

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {uidata.message.map((item, index) => (
          <View key={index} style={{ alignItems: "center" }}>
            <View
              style={{
                padding: 25,
                backgroundColor: COLORS.gray,
                borderRadius: 100,
              }}
            >
              <Image
                source={item.image}
                style={{ width: 10, height: 10, resizeMode: "contain" }}
              />
            </View>
            <HeightSpacer height={10} />
            <ReusableText
              text={item.name}
              family={"regular"}
              size={SIZES.medium}
              color={COLORS.black}
            />
          </View>
        ))}
      </View>

      <HeightSpacer height={30} />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ReusableText
          text={"Transaction"}
          family={"regular"}
          size={SIZES.large}
          color={COLORS.black}
        />
        <ReusableText
          text={"View all"}
          family={"regular"}
          size={SIZES.medium}
          color={COLORS.blue}
        />
      </View>

      <HeightSpacer height={5} />

      <FlatList
        data={uidata.products} // Placeholder items
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 12,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {/* <Text>hello</Text> */}
              <View
                style={{
                  padding: 15,
                  backgroundColor: COLORS.gray,
                  borderRadius: 100,
                }}
              >
                <Image
                  source={item.image}
                  style={{ width: 15, height: 15, resizeMode: "contain" }}
                />
              </View>
              <WidthSpacer width={20} />
              <View>
                <ReusableText
                  text={item.name}
                  family={"medium"}
                  size={SIZES.medium}
                  color={COLORS.black}
                />
                <ReusableText
                  text={item.desc}
                  family={"light"}
                  size={SIZES.regular}
                  color={COLORS.gray2}
                />
              </View>
            </View>

            <View>
              <ReusableText
                text={`${item.price > 500 ? "-" : ""} $${item.price}`}
                family={"medium"}
                size={SIZES.medium}
                color={item.price > 500 ? COLORS.blue : COLORS.black}
              />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
