import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { verticalScale } from "@/utils/styling";
import { colors, spacingX, spacingY } from "@/constants/theme";
import BackButton from "@/components/BackButton";
import Typography from "@/components/Typography";
import Input from "@/components/Input";
import * as Icons from "phosphor-react-native";
import Button from "@/components/Button";
import { useRouter } from "expo-router";

const SignUp = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const nameRef = useRef("");
  const [loading, isLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async () => {
    if (!emailRef.current || !passwordRef.current || !nameRef.current) {
      Alert.alert("Login", "Please fill all the fields");
      return;
    }
    console.log("email: ", emailRef.current);
    console.log("name: ", nameRef.current);
    console.log("password: ", passwordRef.current);
    console.log("good to go");
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton iconSize={28} />
        <View style={{ gap: 5, marginTop: spacingY._20 }}>
          <Typography size={20} fontWeight={"800"}>
            Let's
          </Typography>
          <Typography size={20} fontWeight={"800"}>
            Get Started
          </Typography>
        </View>

        {/* form */}

        <View style={styles.form}>
          <Typography size={16} color={colors.textLighter}>
            Create an account to track all your expenses
          </Typography>
          <Input
            placeholder="Enter your name"
            onChangeText={(value) => (nameRef.current = value)}
            icon={
              <Icons.User
                size={verticalScale(25)}
                color={colors.neutral300}
                weight="fill"
              />
            }
          />

          <Input
            placeholder="Enter your email"
            onChangeText={(value) => (emailRef.current = value)}
            icon={
              <Icons.At
                size={verticalScale(25)}
                color={colors.neutral300}
                weight="fill"
              />
            }
          />

          <Input
            placeholder="Enter your password"
            secureTextEntry
            onChangeText={(value) => (passwordRef.current = value)}
            icon={
              <Icons.Lock
                size={verticalScale(25)}
                color={colors.neutral300}
                weight="fill"
              />
            }
          />
        </View>

        {/* Add isloading state later */}
        <Button onPress={handleSubmit}>
          <Typography fontWeight={"700"} color={colors.black} size={21}>
            Sign up
          </Typography>
        </Button>

        {/* footer */}
        <View style={styles.footer}>
          <Typography size={15}>Already have an accoun?</Typography>
          <Pressable onPress={() => router.navigate("/(Auth)/Login")}>
            <Typography size={15} fontWeight={"700"} color={colors.primary}>
              Login
            </Typography>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacingY._30,
    paddingHorizontal: spacingX._20,
  },
  welcomeText: {
    fontSize: verticalScale(20),
    fontWeight: "bold",
    color: colors.text,
  },
  form: {
    gap: spacingY._20,
  },
  forgotPassword: {
    textAlign: "right",
    fontWeight: "500",
    color: colors.text,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  footerText: {
    textAlign: "center",
    color: colors.text,
    fontSize: verticalScale(15),
  },
});
